# NewLink 

## Demo


https://github.com/KoushaAm/stormhacks-project-NewLink/assets/67440795/d4aa70b2-88c4-45f5-a10c-01a2c9ec35e6




## What is it?

Imagine arriving at a new university in a new country where everything feels unfamiliar. The sights, the sounds, and even the way people interact are different. As a new student, you might wonder what to wear, how to ask questions, or how to make friends. Now imagine having a friend who understands exactly what you’re going through, shares your interests and is ready to help you navigate this new chapter. 

**Introducing... NewLink! 🎉**

This app is the ultimate social compass for newcomers to SFU. It aims to be a one-stop place for newcomers to learn about the university, its values, and culture and connect with other people.

## Features

- 🙋‍♂️ Ask questions to our SFU chatbot and FAQ
- 🤝 Connect with other people by showing interest in student-made events
- 🗓 View various courses offered by SFU
  
## How to run ?
- Use `npm install` command on both the `client` and `server` folders
- Download the Llama 3 weights on `server` folder and store the model in a folder called `/server/model`. You can get the model from this [URL](https://huggingface.co/QuantFactory/Meta-Llama-3-8B-Instruct-GGUF/blob/main/Meta-Llama-3-8B-Instruct.Q2_K.gguf).
- In the backend folder enter `npm run devstart`
- In the frontend folder enter `npm start`
- Now the project should be running on `http://localhost:3000/`
  
## Tech Stack

- React.js for Frontend
- Express.js for Backend/API
- MongoDB for database
- LangChain for finetuning llm

Our primary focus was to build an LLM chatbot that is finetuned to the SFU information. For this, we wanted to use a local running instance of an LLM model like the new llama 3 rather than an open API key. We constructed our API from scratch!
 
