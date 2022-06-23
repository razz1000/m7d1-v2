import React, { useEffect, useState } from "react";
import { Card, Button, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { addToCartAction, addToCartActionWithThunk } from "../redux/actions";
import { FaSplotch } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

let MainPageResults = (props) => {
  const username = useSelector((state) => state.user.name);
  const areJobsLoading = useSelector((state) => state.jobs.isLoading);
  const errorInFetching = useSelector((state) => state.jobs.isError);

  const dispatch = useDispatch();

  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text>{props.data.company_name}</Card.Text>

        <Link to={`/${props.data.company_name}`}>READ MORE</Link>

        <Card.Text>
          EXTERNAL LINK:
          <a href={props.data.url} target="_blank" rel="noreferrer">
            {props.data.title}
          </a>
          <Button
            color="primary"
            onClick={() => {
              // Let's do something in here!
              dispatch(addToCartActionWithThunk(props.data));
            }}
          >
            Save as favorite
            <FaSplotch />
          </Button>
        </Card.Text>
      </Card.Body>
      <Col></Col>
    </Card>
  );
};

export default MainPageResults;
