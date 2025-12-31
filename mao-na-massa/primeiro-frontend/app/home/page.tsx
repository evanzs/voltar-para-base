'use client'


import { Card, Button } from 'react-bootstrap'

const home = () => {
  return (
    <>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top"  src="https://www.placecats.com/neo/300/200"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default home