// import { useState } from "react";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// // import React, useState from 'react'

// function Reviews() {

//   const [name, setName] = useState("");
//   const [comment, setComment] = useState('');
//   const [score, setScore] = useState('');
//   const [userId, setUserId] = useState('');
//   const [movieId, setMovieId] = useState('');
//   // const [submitted, setSubmitted] = useState(false);

//   const handleName = (e) => {
//     setName(e.target.value);
//     // setSubmitted(false);
// };

// const handleComment = (e) => {
//   setComment(e.target.value);
//   // setSubmitted(false);
// };

// const handleScore = (e) => {
//   setScore(e.target.value);
//   // setSubmitted(false);
// };
    
// const handleUserId = (e) => {
//   setUserId(e.target.value);
//   // setSubmitted(false);
// };

// const handleMovieId = (e) => {
//   setMovieId(e.target.value);
//   // setSubmitted(false);
// };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Review successfully submitted`)
//   }
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicName">
//         <Form.Label>NAME</Form.Label>
//         <Form.Control onChange={handleName} value={name} type="name" placeholder="Enter name" />
//         {/* <Form.Text className="text-muted"> */}
//           {/* We'll never share your email with anyone else. */}
//         {/* </Form.Text> */}
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicScore">
//         <Form.Label>SCORE</Form.Label>
//         <Form.Control onChange={handleScore} value={score} type="score" placeholder="score" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//         <Form.Label>COMMENT</Form.Label>
//         <Form.Control onChange={handleComment} value={comment} as="textarea" rows={3} />
//       </Form.Group>
//       <Form.Group className="mb-1" controlId="formBasicMovieid">
//         <Form.Label>MOVIE ID</Form.Label>
//         <Form.Control onChange={handleMovieId} value={movieId} type="moveId" placeholder="moveid" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicUseid">
//         <Form.Label>USERID</Form.Label>
//         <Form.Control onChange={handleUserId} value={userId} type="userId" placeholder="userid" />
//       </Form.Group>
//       <Button variant="primary" onClick={handleSubmit} type="submit">
//         Submit
//       </Button>
//     </Form>
//     // <div>
//     //   <form>
//     //   <label className="label">Name</label>
//     //             <input onChange={handleName} className="input"
//     //                 value={name} type="text" />

//     //             <label className="label">Comment</label>
//     //             <input onChange={handleComment} className="input"
//     //                 value={comment} type="comment" />

//     //             <label className="label">Score</label>
//     //             <input onChange={handleScore} className="input"
//     //                 value={score} type="score" />
//     //             <label className="label">movieId</label>
//     //             <input onChange={handleMovieId} className="input"
//     //                 value={movieId} type="movieId" />
//     //             <label className="label">userId</label>
//     //             <input onChange={handleUserId} className="input"
//     //                 value={userId} type="userId" />
//     //             <button onClick={handleSubmit} className="btn" type="submit">
//     //                 Submit
//     //             </button>
//     // </form>
//     // </div>
//   )
// }

// export default Reviews
