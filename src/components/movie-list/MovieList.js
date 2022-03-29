import React from "react";
import { ButtonGroup, Col, Row, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const MovieList = ({ movieList, handleOnDelete }) => {
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between py-3">
          <ButtonGroup size="lg" aria-label="Basic example">
            <Button variant="warning">ALL</Button>
            <Button variant="primary">HAPPY</Button>
            <Button variant="danger">LAZY</Button>
          </ButtonGroup>
          <ButtonGroup size="lg" aria-label="Basic example">
            <Button variant="primary">GRID</Button>
            <Button variant="secondary">LIST</Button>
          </ButtonGroup>
        </div>
        <div className="d-flex justify-content-between flex-wrap mb-3">
          {movieList.map((movie, i) => (
            <CustomCard
              key={i}
              movie={movie}
              btnDelete={true}
              fun={handleOnDelete}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
};
