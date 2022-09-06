import React, { FC } from 'react'
import { Movie } from '../types/type'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';



interface itemProps {
    film: Movie
}
const MovieItem:FC<itemProps> = (props) => {
  return (
    
        <Col>

          <Card>
            
            <Card.Body>
              <Card.Title>{props.film.title}</Card.Title>
              <Card.Text>
                {props.film.director}
              </Card.Text>
              <Button variant="primary">{props.film.year}</Button>
            </Card.Body>
          </Card>
        </Col>
      
  )
}

export default MovieItem
