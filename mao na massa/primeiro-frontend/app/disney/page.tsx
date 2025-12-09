'use client'

import { useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

interface Hero {
  [key: string]: any;
}

const page = () => {
  const [herois, setHerois] = useState<Hero[]>([]);

  useEffect(() => {
    fetch('https://api.disneyapi.dev/character').then(res => res.json()).then(({ data }) => {
           setHerois(data)
    })
  }, [])
  return (
    <>
      <Row>
        {herois.map(heroi => (
          <Col key = {heroi._id} className="mt-3">
            <Card style={{ width: '18rem',height: '23rem'}}>
              <Card.Img variant="top" src={heroi.imageUrl}  height={150}/>
              <Card.Body>
                <Card.Title>{heroi.name}</Card.Title>
                <Card.Text>
                  {heroi.films.join()}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default page