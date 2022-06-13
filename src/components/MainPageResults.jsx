import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

let MainPageResults = ({ data }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>{data.company_name}</Card.Text>

        <Button variant="primary">
          <Link to={`/${data.company_name}`}>READ MORE</Link>
        </Button>
        <Card.Text>
          EXTERNAL LINK:
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Card.Text>
      </Card.Body>
      <Col></Col>
    </Card>
  );
};

export default MainPageResults;
