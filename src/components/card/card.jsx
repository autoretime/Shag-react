import React from "react";
import { Button, Card } from "react-bootstrap";

const CardElement = ({film, handleOpenDescription, deleteFilm, handleOpen}) =>{

    return (
      <Card
        key={film.episode_id}
        className="m-auto h-100 bg-secondary"
        style={{ width: "20rem" }}
      >
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNCMcBS9Q3muLwbjtNTRoCxkA8LU7vlp42HA&usqp=CAU"
        />
        {film !== undefined && (
          <Card.Body className="d-flex flex-column bg-dark">
            <Card.Title>{film.title}</Card.Title>

            <Card.Text>
              <h3>{film.director}</h3>
            </Card.Text>

            <div className="btns d-flex">
              <Button variant="primary w-50 me-2" onClick={handleOpen}>Update</Button>

              <Button variant="danger w-50 ms-2" onClick={() => deleteFilm(film.episode_id)}>Delete</Button>
            </div>

            <Button variant="success" className="w-100 mt-2" onClick={handleOpenDescription}>
              See full information
            </Button>
          </Card.Body>
        )}
      </Card>
    );
}

export default CardElement