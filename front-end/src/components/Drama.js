import React, { useState, useEffect } from 'react'
import Alert from "react-bootstrap/Alert";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Drama() {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/movies/4")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data)
        console.log(data)
        setIsLoaded(true);
      });
  }, []);
  console.log(movies)
  let movieCard = (movie) => {
    return (
      <Row>
        <Col></Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={movie.poster_path} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                {movie.overview}
              </Card.Text>
              <Button variant="primary" size="lg">Vote:{movie.vote_average}</Button>
              <Link to={"/reviews/" + movie.id}>
                <Button variant="success" size="lg">
                  Review
                </Button>
              </Link>
              {/* <Link to={"/reviews/"+movie.id}>
                <Button variant="success" size="lg">
                  Show Reviews
                </Button>
              </Link> */}
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        {/* ))} */}
      </Row>
    );

  }


  let myMovies = movies.map((movie) => (

    <div>
      {movieCard(movie)}

    </div>
  ));

  if (!isLoaded) return <h3>Loading...</h3>;
  return (
    <div>
      <Alert variant='success'>Drama Movies</Alert>
      {myMovies}
    </div>
  )
}

export default Drama