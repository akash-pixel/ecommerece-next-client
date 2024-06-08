
import React, { useState } from 'react';
import './style.css';

const MyModal = ({ open, onClose, onSubmit }: any) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  if (!open) return null;

  const handleSubmit = () => {
    onSubmit({ Name: name, Description: description });
    setName('');
    setDescription('');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Enter Details</h2>
        <div className="form-group">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            rows={4}
          ></textarea>
        </div>
        <div className="button-group">
          <button onClick={onClose} className="button cancel">
            Cancel
          </button>
          <button onClick={handleSubmit} className="button submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyModal;
