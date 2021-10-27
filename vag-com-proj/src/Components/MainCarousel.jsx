import { Component } from 'react'
import { Card, Container } from 'react-bootstrap'

class MainCarousel extends Component {
  render() {
    return (
      <Card className="text-dark">
        <Card.Img
          src="http://www.vag-com-portugues.com/R8.jpg"
          alt="car image"
        />
        <Card.ImgOverlay>
          <Container>
            <Card.Title>VAG-COM DIAGNOSTIC SYSTEM</Card.Title>
            <Card.Text>
              SISTEMA DE DIAGNÓSTICO PARA VOLKSWAGEN, AUDI, SEAT E SKODA
            </Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
    )
  }
}
export default MainCarousel