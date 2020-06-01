import React, { Fragment, useState } from 'react';

import './FeedbackForm.css';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    comment: '',
  });
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <div className="row">
        <h2 style={{ textAlign: 'center' }}>Send us a feedback</h2>
        <form className="feedback">
          <label>
            Name
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label>
            {' '}
            Last Name
            <input
              name="lastName"
              onChange={(e) => handleChange(e)}
              type="text"
              value={formData.lastName}
            />
          </label>
          <label>
            {' '}
            Email
            <input
              name="email"
              onChange={(e) => handleChange(e)}
              type="text"
              value={formData.email}
            />
          </label>
          <label>
            {' '}
            Comments
            <textarea onChange={(e) => handleChange(e)}></textarea>
          </label>
        </form>
      </div>
    </Fragment>
  );
};

export default FeedbackForm;
