import React, { useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';


const App = () => {
  const [answer, setAnswer] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      answer: answer,
      description: description,
    };

    // Use EmailJS to send email
    emailjs
      .send(
        'service_dagoj7k', // Replace with your EmailJS service ID
        'template_gh8nivb', // Replace with your EmailJS template ID
        formData,
        '3GAdC9x_OQhWVMeUj' // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          alert('Message sent successfully!');
          setAnswer('');
          setDescription('');
        },
        (error) => {
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Can we go on a non-date date?</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="question">
            <label>Yes or No:</label>
            <div className="options">
              <input
                type="radio"
                id="yes"
                name="answer"
                value="Yes"
                onChange={() => setAnswer('Yes')}
                checked={answer === 'Yes'}
              />
              <label htmlFor="yes">Yes</label>
              <input
                type="radio"
                id="no"
                name="answer"
                value="No"
                onChange={() => setAnswer('No')}
                checked={answer === 'No'}
              />
              <label htmlFor="no">No</label>
            </div>
          </div>
          <div className="description">
            <label>Write a small description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Why or why not?"
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
