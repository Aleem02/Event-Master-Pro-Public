import React, { useState } from "react";
import "./createnew.css";
import { enablePersistentCacheIndexAutoCreation } from "firebase/firestore";

const CreateEvent = ({
  setTitle,
  setDescription,
  setLocation,
  setRegisterLink,
  setCategory,
  setMode,
  setDate,
  imageUpload,
  setImageUpload,
  handleFileUpload,
  handleFormSubmit,
}) => {
  const [isLocation, setIsLocation] = useState(true);

  const handleModeChange = (e) => {
    setMode(e.target.value);
    setIsLocation(!isLocation);
  };

  return (
    <form>
      <h1>Create Event</h1>
      <div className="title">
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          <label htmlFor="category">Choose Category</label>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="val1">Other</option>
            <option value="val2">Value 1</option>
            <option value="val3">Value 2</option>
            <option value="val4">Value 3</option>
          </select>
        </div>
      </div>
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div className="file-upload">
        <label htmlFor="file">Image</label>
        <input
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
        <button
          className={
            imageUpload != null ? "upload-image-active" : "upload-image"
          }
          onClick={handleFileUpload}
        >
          Upload Image
        </button>
      </div>
      <div className="mode">
        <div>
          <label htmlFor="category">Choose Mode</label>
          <select name="mode" id="mode" onChange={(e) => handleModeChange(e)}>
            <option value="Offline">Offline</option>
            <option value="Online">Online</option>
          </select>
        </div>
        {isLocation ? (
          <div>
            <i className="fa-solid fa-location-dot"></i>
            <input
              type="text"
              placeholder="Enter Location"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        ) : null}
      </div>
      <div className="date">
        <label htmlFor="date">Select Date</label>
        <input
          type="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="url">
        <input
          type="url"
          placeholder="Register Link"
          onChange={(e) => setRegisterLink(e.target.value)}
        />
      </div>
      <button className="submit-btn" onClick={handleFormSubmit}>
        Create Event
      </button>
    </form>
  );
};

export default CreateEvent;
