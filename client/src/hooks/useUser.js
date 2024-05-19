import { useState } from 'react';

function useUser() {
  const [user, setUser] = useState({
    username: 'JohnDoe',
    email: 'john.doe@sfu.com',
    password: 'password123',
    bio: 'I am a SFU student.',
    tags: ['sfu', 'hiking'],
  });

  return user;
}

export default useUser;
