import React, { useState } from 'react';
import sendEmail from '../../../util/send_email';
import FormErrors from '../../../util/form_errors';
import FormSuccesses from '../../../util/form_successes';
import ski from '../../../images/me/TIM_ski.jpg';

export default () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');
  let [formErrors, setErrors] = useState([]);
  let [formSuccesses, setSuccesses] = useState([]);

  const changeName = (e) => {
    e.preventDefault();
    setName(e.currentTarget.value);
    setErrors([]); setSuccesses([]);
  }
  const changeEmail = (e) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
    setErrors([]); setSuccesses([]);
  }
  const changeMessage = (e) => {
    e.preventDefault();
    setMessage(e.currentTarget.value);
    setErrors([]); setSuccesses([]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const templateParams = { from_name: name, from_email: email, message };
      sendEmail(templateParams);
      setSuccesses(['Thanks for your message, I\'ll be in touch shortly!'])
      setName(''); setEmail(''); setMessage('');
    } else {
      setErrors(['Please fill out all fields continue.']);
    }
  }

  return (
    <>
      <div className="form-text">
        <h1>Send me an email: </h1>
      <div className="form-feedback">
        <FormErrors errors={formErrors} />
        <FormSuccesses successes={formSuccesses} />
      </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row-one">
            <input type="text" value={name} placeholder="Name" onChange={changeName}/>
            <input type="email" value={email} placeholder="Email" onChange={changeEmail}/>
          </div>
          <div className="contact-form-row-two">
            <textarea value={message} placeholder="Message" onChange={changeMessage}/>
          </div>
          <div className="contact-form-row-three">
            <button type="submit">Send<i> </i></button>
          </div>
        </form>
      </div>
      <div className="form-img">
        <img src={ski} alt="Tim Harding" />
      </div>
    </>
  )
}
