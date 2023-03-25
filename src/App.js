import React, { useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import NeroForm from "./NeroForm";
import GiftList from "./GiftList";
import Loading from "./Loading";
import gpt3Request from "./gpt3";

function App() {
  const [giftIdeas, setGiftIdeas] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    const characteristics = Object.values(formData).join(", ");
    const ideas = await gpt3Request(characteristics);
    setGiftIdeas(ideas);
    setLoading(false);
  };

  return (
    <Container className="App">
      <h1>NERO - Gift Ideas</h1>
      <NeroForm onSubmit={handleFormSubmit} />
      {loading ? <Loading /> : <GiftList giftIdeas={giftIdeas} />}
    </Container>
  );
}

export default App;
