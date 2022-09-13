import { useState } from "react";
import { Row,Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";

function Reviews() {
  let myParams = useParams()

  const [name, setName] = useState("");
  const [comment, setComment] = useState('');
  const [score, setScore] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
};

const handleComment = (e) => {
  setComment(e.target.value);
};

const handleScore = (e) => {
  setScore(e.target.value);
};
    

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
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicScore">
        <Form.Label>SCORE</Form.Label>
        <Form.Control onChange={handleScore} value={score} type="score" placeholder="score" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>COMMENT</Form.Label>
        <Form.Control onChange={handleComment} value={comment} as="textarea" rows={3} />
      </Form.Group>
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
