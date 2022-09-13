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
  console.log("murphy")

  // const API_KEY = "&api_key=b43cd0618a0928101b9018dd947ba5f5";
  // const base_url = "https://api.themoviedb.org/3";
  // const url = base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_KEY;
  // const url = `http://www.omdbapi.com/?t=${search}&apikey=${API_KEY}`;

  useEffect(() => {
    fetch("http://localhost:9292/movies/1")
      .then((response) => response.json())
      .then((data) => {
        // data.map((movie)=>{setMovies(movie)})
        setMovies(data)
        console.log(data)
        // setMovies(data.results);
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
              <Button variant="primary" size= "lg">{movie.vote_average}</Button>
              <Link to={"/reviews/"+movie.id}>
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
      {/* <h1>{movie.title}</h1> */}
      {/* <p>{movie.overview}</p> */}
      {/* <h2>{movie.vote_average}</h2> */}
      {/* <h3></h3> */}
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