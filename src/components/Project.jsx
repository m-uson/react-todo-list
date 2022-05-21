import React, { useState } from "react";

const Project = ({ items }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = (index) => {
    if (showDetails === index) {
      return setShowDetails(false);
    }
    setShowDetails(index);
  };

  const renderedItems = items.map((item, index) => {
    const active = showDetails === index ? "active" : "";

    return (
      <div key={item.id} className="project">
        <div className="actions">
          <h3 onClick={() => toggleShowDetails(index)}>{item.title}</h3>
          <div className="icons">
            <span className="material-icons">edit</span>
            <span onClick={() => deleteProject()} className="material-icons">
              delete
            </span>
            <span className="material-icons">done</span>
          </div>
        </div>
        <p className={`details ${active}`}>{item.details}</p>
      </div>
    );
  });

  return <>{items.length ? renderedItems : <div>loading...</div>}</>;
};

export default Project;
