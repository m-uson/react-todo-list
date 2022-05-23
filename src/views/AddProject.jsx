import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProject = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const url = "http://localhost:3001/projects";
    try {
      const project = {
        title: title,
        details: description,
        complete: false,
      };

      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      });
      navigate("/");
    } catch (e) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Название задачи:</label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        required
      />
      <label>Описание:</label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        required
      ></textarea>
      <button>Создать задачу</button>
    </form>
  );
};

export default AddProject;
