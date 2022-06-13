import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import MainPageResults from "./MainPageResults";

let MainPage = () => {
  const [inputQuery, setInputQuery] = useState([]);
  const [category, setCategory] = useState([]);
  const [jobs, setJobs] = useState([]);

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

  let fetchData = async () => {
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?search=" +
        inputQuery.query +
        "&limit=5"
    );
    if (response.ok) {
      let data = await response.json();
      console.log(data.data);
      setJobs(data.data);
    }
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
          {jobs.map((jobsData) => (
            <MainPageResults data={jobsData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
