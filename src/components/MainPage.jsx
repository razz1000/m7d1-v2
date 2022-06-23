import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Spinner,
  Alert,
} from "react-bootstrap";
import { getJobsAction } from "../redux/actions";
import MainPageResults from "./MainPageResults";
import { useSelector, useDispatch } from "react-redux";

let MainPage = ({}) => {
  const [inputQuery, setInputQuery] = useState("");
  const [category, setCategory] = useState([]);
  const [jobs, setJobs] = useState([]);

  const jobsFromRedux = useSelector((state) => state.jobs.jobs);
  const areJobsLoading = useSelector((state) => state.jobs.isLoading);
  const errorInFetching = useSelector((state) => state.jobs.isError);

  const dispatch = useDispatch();

  let handleChangeFunction = (propertyName, targetValue) => {
    setInputQuery({
      ...inputQuery,
      [propertyName]: targetValue,
    });
  };

  let handleChangeFunction2 = (propertyName, targetValue) => {
    setCategory({
      ...category,
      [propertyName]: targetValue,
    });
  };

  const query = inputQuery.query;
  console.log("inputquery:", inputQuery.query);

  let fetchData = async (inputquery) => {
    console.log("WE ARE FETCHING NOW");
    console.log("inputQuery2:", query);
    dispatch(getJobsAction(query));
    console.log("Fetch data function:", getJobsAction);
  };

  let submitData = (event) => {
    event.preventDefault();
    console.log("hello");
    fetchData();
  };

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                Enter the job you would like to search for
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter profession"
                onChange={(event) => {
                  handleChangeFunction("query", event.target.value);
                }}
              />
              <Form.Text className="text-muted">
                We never store any information on you (Dont worry!).
              </Form.Text>
            </Form.Group>
            <DropdownButton
              id="dropdown-basic-button"
              title="Category"
              onClick={(event) => {
                handleChangeFunction2("category", event.target.value);
              }}
            >
              <Dropdown.Item>Business</Dropdown.Item>
              <Dropdown.Item>Data</Dropdown.Item>
              <Dropdown.Item>Design</Dropdown.Item>
            </DropdownButton>

            <Button variant="primary" type="submit" onClick={submitData}>
              Search
            </Button>
          </Form>
        </Col>
        <Col>
          {areJobsLoading ? (
            <div className="text-center">
              <Spinner variant="success" animation="border" />
            </div>
          ) : errorInFetching ? (
            <Alert variant="danger">Error! :(</Alert>
          ) : (
            jobsFromRedux.map((jobsData) => (
              <MainPageResults key={jobsData._id} data={jobsData} />
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
