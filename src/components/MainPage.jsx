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
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  jobsFromRedux: state.jobs.jobs,
  areJobsLoading: state.jobs.isLoading,
  errorInFetching: state.jobs.isError,
});

const mapDispatchToProps = (dispatch) => ({
  getJobs: (query) => {
    dispatch(getJobsAction(query));
  },
});

let MainPage = ({ getJobs, jobsFromRedux, areJobsLoading }) => {
  const [inputQuery, setInputQuery] = useState("");
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

  const query = inputQuery.query;
  console.log("inputquery:", inputQuery.query);

  let fetchData = async (inputquery) => {
    console.log("WE ARE FETCHING NOW");
    console.log("inputQuery2:", query);
    getJobs(query);
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
          {jobsFromRedux.map((jobsData) => (
            <MainPageResults key={jobsData._id} data={jobsData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
