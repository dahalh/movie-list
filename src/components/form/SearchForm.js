import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

export const SearchForm = ({ getMovie }) => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    // console.log(value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    getMovie(search);
    setSearch("");
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
              value={search}
              required
            />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
