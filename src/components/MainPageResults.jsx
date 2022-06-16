import React, { useEffect, useState } from "react";
import { Card, Button, Col, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCartAction, addToCartActionWithThunk } from "../redux/actions";
import { FaSplotch } from "react-icons/fa";

const mapStateToProps = (state) => ({
  username: state.user.name,
  areJobsLoading: state.jobs.isLoading,
  errorInFetching: state.jobs.isError,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (jobToAdd) => {
    dispatch(addToCartActionWithThunk(jobToAdd));
  },
});

let MainPageResults = (props) => {
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
              props.addToCart(props.data);
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPageResults);
