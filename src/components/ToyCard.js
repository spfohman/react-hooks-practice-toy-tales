import React from "react";

function ToyCard({ id, name, image, likes, onUpdateToy, handleDelete }) {
  function handleAddLikes() {
    const addLike = {
      likes: likes + 1,
    };
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addLike),
    })
      .then((response) => response.json())
      .then(onUpdateToy);
  }

  return (
    <div className="card" id={`toy-${id}`}>
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button onClick={handleAddLikes} className="like-btn">
        Like {`🧡`}
      </button>
      <button onClick={() => handleDelete()} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
