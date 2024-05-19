import express from 'express';
import { Router } from 'express';
import { LlamaCpp } from "@langchain/community/llms/llama_cpp";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { FaissStore } from "@langchain/community/vectorstores/faiss";
import { PromptTemplate } from "@langchain/core/prompts";
import { formatDocumentsAsString } from "langchain/util/document";
import { StringOutputParser } from "@langchain/core/output_parsers";
import {RunnableSequence,RunnablePassthrough} from "@langchain/core/runnables";
import fs from 'fs';

// seting up router
const router = Router();

// ********************** load sfu_info.json **********************
//server/data_extraction/clubs/sfu_info.json
const data = fs.readFileSync('data_extraction/clubs/sfu_info.json');
const sfu_info = JSON.parse(data);

const general = sfu_info["General"];

const reputation = sfu_info["Reputation"];
const history = sfu_info["History"];
const campuses = sfu_info["Campuses"];

// ****************************************************************

const llamaPath = "model/Meta-Llama-3-8B-Instruct.Q2_K.gguf";
let model;
let embeddings;
let vectorStore;
let chain;

let loaded = false;

router.get('/load', async (req, res) => {
    
    if (loaded) {
        return res.json({ message: 'Model already initialized' });
    }

    console.log('loading model');
    try {

        model = new LlamaCpp({ 
            modelPath: llamaPath ,
            maxTokens: 128,
        });
        embeddings = new HuggingFaceInferenceEmbeddings({
            apiKey: "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", 
        });


        vectorStore = await FaissStore.fromTexts(
            [general, reputation, history, campuses],
            [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
            embeddings
        );

        const retriever = vectorStore.asRetriever();
        
        const prompt =
            PromptTemplate.fromTemplate(`Answer the question based only on the following context:
            {context}

        Question: {question}`);
        
        chain = RunnableSequence.from([
            {
                context: retriever.pipe(formatDocumentsAsString),
                question: new RunnablePassthrough(),
            },
            prompt,
            model,
            new StringOutputParser(),
        ]);

        res.json({ message: 'Model initialized'})
        loaded = true;

    } catch (error) {
        console.log(error);
        res.json({ message: 'Error loading model'})
    }

}); 



router.post('/prompt', async (req, res) => {
    const question = req.body.question;
    //
    if (!chain) {
      return res.status(500).json({ error: 'Model not initialized' });
    }
    
    const result = await chain.invoke(question);
    res.json({ answer: result });
});


export default router;
