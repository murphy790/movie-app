import React, { useState, useEffect } from 'react'
import Alert from "react-bootstrap/Alert";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Comedy() {
  const [movies, setMovies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9292/movies/1")
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
        {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
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



  // if the data hasn't been loaded, show a loading indicator
  if (!isLoaded) return <h3>Loading...</h3>;
  return (
    <div>
      <Alert variant='success'>Comedy Movies!</Alert>
      {myMovies}
    </div>
  )
}

export default Comedy