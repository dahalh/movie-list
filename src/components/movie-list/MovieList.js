import React, { useState } from "react";
import { ButtonGroup, Col, Row, Button } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";
import { ListItem } from "../list-item/ListItem";

export const MovieList = ({ movieList, handleOnDelete, setCategory }) => {
  const [display, setDisplay] = useState("grid");
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between py-3">
          <ButtonGroup size="lg" aria-label="Basic example">
            <Button variant="warning" onClick={() => setCategory("")}>
              ALL
            </Button>
            <Button variant="primary" onClick={() => setCategory("happy")}>
              HAPPY
            </Button>
            <Button variant="danger" onClick={() => setCategory("lazy")}>
              LAZY
            </Button>
          </ButtonGroup>
          <ButtonGroup size="lg" aria-label="Basic example">
            <Button variant="primary" onClick={() => setDisplay("grid")}>
              GRID
            </Button>
            <Button variant="secondary" onClick={() => setDisplay("list")}>
              LIST
            </Button>
          </ButtonGroup>
        </div>
        {/* d-flex justify-content-between flex-wrap mb-3 */}

        <div className="d-flex justify-content-between flex-wrap mb-3">
          {movieList.map((movie, i) =>
            display === "list" ? (
              <ListItem
                key={i}
                movie={movie}
                btnDelete={true}
                fun={handleOnDelete}
              />
            ) : (
              <CustomCard
                key={i}
                movie={movie}
                btnDelete={true}
                fun={handleOnDelete}
              />
            )
          )}
        </div>
      </Col>
    </Row>
  );
};
