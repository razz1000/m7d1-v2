import React, { useEffect, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCartAction } from "../redux/actions";

const mapStateToProps = (data) => ({
  username: data,
});

const mapDispatchToProps = (dispatch) => ({
  // here we're going to write some props capable of interacting with the redux store
  // that means, some props capable of DISPATCHING ACTIONS!
  // let's create a prop that will dispatch an action when invoked!
  addToCart: (bookToAdd) => {
    dispatch(addToCartAction(bookToAdd));
  },
});

let MainPageResults = (props) => {
  const [book, setBook] = useState([]);

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
            Add as favorite
          </Button>
        </Card.Text>
      </Card.Body>
      <Col></Col>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPageResults);
