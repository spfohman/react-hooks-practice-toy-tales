import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onUpdateToy }) {
  const eachToy = toys.map((toy) => {
    return <ToyCard key={toy.id} onUpdateToy={onUpdateToy} {...toy} />;
  });

  return <div id="toy-collection">{eachToy}</div>;
}

export default ToyContainer;
