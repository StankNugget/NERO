import React from "react";
import { ListGroup } from "react-bootstrap";

const GiftList = ({ giftIdeas }) => (
  <ListGroup>
    {giftIdeas.map((idea, index) => (
      <ListGroup.Item key={index}>{idea}</ListGroup.Item>
    ))}
  </ListGroup>
);

export default GiftList;
