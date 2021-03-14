import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:5000/",
  responseType: "json",
});

export const Home: FunctionComponent = () => {
  const loadLink = useCallback(async () => {
    const response = await api.get("/link");
    return response.data;
  }, []);

  const [link, setLink] = useState<string | undefined>(undefined);

  useEffect(() => {
    const link = await loadLink();
    setLink(link);
  }, [loadLink, setLink]);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Gift inspirator</h2>
          <p>We've found a gift idea for you.</p>
        </Col>
      </Row>
      <Row>
        <Col></Col>
      </Row>
    </Container>
  );
};
