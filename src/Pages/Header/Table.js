import React, { useContext, useState } from "react";
import "./Table.css";
import { AppContext } from "../../Components/AppContext/AppContext";
import Form from "react-bootstrap/Form";

import { InputGroup, Button, Container, Card } from "react-bootstrap";
export default function Table() {
  const { data, query, setQuery } = useContext(AppContext);
  return (
    <table>
      <div className="cards">
        {data
          .filter((item) => {
            return query.toLowerCase().trim() === ""
              ? ""
              : item.name.toLowerCase().includes(query);
          })
          .map((item) => {
            return (
              <Card className="card">
                <div>
                  <Card.Img className="cardimg" variant="top" src={item.img[0]} />
                </div>

                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                 
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </table>
  );
}
