import { useState } from "react";
import { Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
// import React, useState from 'react'

function Reviews() {
  let myParams = useParams()

  const [name, setName] = useState("");
  const [comment, setComment] = useState('');
  const [score, setScore] = useState('');
  // const [userId, setUserId] = useState('');
  // const [movieId, setMovieId] = useState('');
  // const [submitted, setSubmitted] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    // setSubmitted(false);
};

const handleComment = (e) => {
  setComment(e.target.value);
  // setSubmitted(false);
};

const handleScore = (e) => {
  setScore(e.target.value);
  // setSubmitted(false);
};
    
// const handleUserId = (e) => {
  // setUserId(e.target.value);
  // setSubmitted(false);
// };

// const handleMovieId = (e) => {
//   setMovieId(myParams.id);
//   // setSubmitted(false);
// };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Review successfully submitted`)
    fetch("http://localhost:9292/reviews/"+myParams.id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        score: score,
        user_id: Math.floor(Math.random() * 10),
        movie_id: myParams.id,
      }),
    })
      .then((r) => r.json())
      .then((newReview) =>{
       console.log(newReview)

      });
  }
  
  return (
    <Row>
      <Col></Col>
      <Col>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>NAME</Form.Label>
        <Form.Control onChange={handleName} value={name} type="name" placeholder="Enter name" />
        {/* <Form.Text className="text-muted"> */}
          {/* We'll never share your email with anyone else. */}
        {/* </Form.Text> */}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicScore">
        <Form.Label>SCORE</Form.Label>
        <Form.Control onChange={handleScore} value={score} type="score" placeholder="score" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>COMMENT</Form.Label>
        <Form.Control onChange={handleComment} value={comment} as="textarea" rows={3} />
      </Form.Group>
      {/* <Form.Group className="mb-1" controlId="formBasicMovieid">
        <Form.Label>MOVIE ID</Form.Label>
        <Form.Control onChange={handleMovieId} value={movieId} type="moveId" placeholder="moveid" />
      </Form.Group> */}
      {/* <Form.Group className="mb-3" controlId="formBasicUseid">
        <Form.Label>USERID</Form.Label>
        <Form.Control onChange={handleUserId} value={userId} type="userId" placeholder="userid" />
      </Form.Group> */}
      <Button variant="primary" onClick={handleSubmit} type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    <Col></Col>
    </Row>
    
  )
}

export default Reviews
