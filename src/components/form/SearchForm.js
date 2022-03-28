import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              placeholder="Search..."
              onChange={handleOnChange}
              required
            />
          </Col>
          <Col>
            <Button variant="warning" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col className="d-flex justify-content-center">
          <CustomCard />
        </Col>
      </Row>
    </>
  );
};
