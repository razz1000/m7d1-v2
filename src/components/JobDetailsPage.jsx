import react, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

let JobDetailsPage = () => {
  const [specificJobs, setSpecificJobs] = useState([]);
  const params = useParams();
  const companyName = params.company;
  console.log("COMpanyname: ", companyName);

  let fetchCompanyData = async () => {
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?company=" + companyName
    );
    if (response.ok) {
      let data = await response.json();
      console.log(data.data);
      setSpecificJobs(data.data);
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12}>
          {specificJobs.map((jobs) => {
            return (
              <Card>
                <Card.Body>
                  <Card.Title>{jobs.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {jobs.category}
                  </Card.Subtitle>
                  <Card.Text>{jobs.description}</Card.Text>
                  <Card.Text>
                    EXTERNAL LINK:
                    <a href={jobs.url} target="_blank" rel="noreferrer">
                      {jobs.title}
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetailsPage;
