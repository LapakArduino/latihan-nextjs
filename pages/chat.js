// 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
import { useState } from 'react';
import axios from 'axios';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const { data } = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: message,
        max_tokens: 50,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      });

      setResponse(data.choices[0].text);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <h1>ChatGPT</h1>
      <div>
        <textarea
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        <p>{response}</p>
      </div>
    </>
  );
}
