import React from "react";
import { Card, Modal } from "react-bootstrap";


const ShowFullInfo = ({show , handleClose , fullInfoFilm}) =>{

    const { title, opening_crawl, director, producer, release_date } = fullInfoFilm;

    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Full Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card style={{ width: "29rem" }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCMcBS9Q3muLwbjtNTRoCxkA8LU7vlp42HA&usqp=CAU" />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <p>{release_date}</p>
              <Card.Text>
                Director: { director}
              </Card.Text>
              <Card.Text>
                Produser: { producer}
              </Card.Text>
              <Card.Text>
               Description:
               <div>{opening_crawl}</div>               
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    );
}

export default ShowFullInfo