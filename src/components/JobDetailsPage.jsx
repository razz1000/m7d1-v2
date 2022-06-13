import react, { useEffect } from "react";
import { useParms } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

let JobDetailsPage = () => {
  const { company } = useParms();
  const companyName = params.company;
  console.log("COMpanyname: ", companyName);

  let fetchCompanyData = async () => {
    const response = await fetch(
      "https://strive-jobs-api.herokuapp.com/jobs?company=" + companyName
    );
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>Hello</Col>
      </Row>
    </Container>
  );
};

export default JobDetailsPage;
