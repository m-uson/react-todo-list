import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Project = ({ items }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = (index) => {
    if (showDetails === index) {
      return setShowDetails(false);
    }
    setShowDetails(index);
  };

  const deleteItem = async (id) => {
    const url = "http://localhost:3001/projects/" + id;

    await fetch(url, { method: "DELETE" });
  };

  const renderedItems = items.map((item, id) => {
    const active = showDetails === id ? "active" : "";

    const updateItem = async (id) => {
      const url = "http://localhost:3001/projects/" + id;

      console.log(url.complete);

      await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ complete: !item.complete }),
      });
    };

    return (
      <div
        key={item.id}
        className={`project ${item.complete ? "completed" : ""}`}
      >
        <div className="actions">
          <h3 onClick={() => toggleShowDetails(id)}>{item.title}</h3>
          <div className="icons">
            <span className="material-icons">edit</span>
            <span onClick={() => deleteItem(id)} className="material-icons">
              delete
            </span>
            <span onClick={() => updateItem(id)} className="material-icons">
              done
            </span>
          </div>
        </div>
        <p className={`details ${active}`}>{item.details}</p>
      </div>
    );
  });

  return <>{items.length ? renderedItems : <div>loading...</div>}</>;
};

export default Project;
