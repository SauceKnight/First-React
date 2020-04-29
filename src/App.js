import React from 'react';
import PetDetailPage from "./PetDetailPage.js"

function App(props) {
  return (
    <PetDetailPage pet={props.pet} />
  );
}

export default App;
