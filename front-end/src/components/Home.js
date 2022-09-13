import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Home() {

  return (

    <Container>
      <Row>
        <Col>
          <div>
            <h1 className='firstheading'>Screens and Snacks</h1>
            <p>Screens and snacks is a movie app that helps the user discover movies.So pick the snacks,we help you pick that movie.Shhhh....the movie is about to start!</p>
          </div>
        </Col>
        <Col>
          <div>
            <img src="https://images.squarespace-cdn.com/content/v1/5f1b5f295b8c871fdada88df/1649785800226-DE5JRGOMPGI8M1DDIHTG/alex-litvin-MAYsdoYpGuk-unsplash.jpg?format=1000w" alt="za" />
          </div>
        </Col>

      </Row>
    </Container>
  )
}

export default Home