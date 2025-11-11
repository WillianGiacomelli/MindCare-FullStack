import React from 'react'
import './Services.css'
import { Container } from 'react-bootstrap'
import Card from 'react-bootstrap/esm/Card'

const Services = () => {
  return (
    <Container className='my-5 d-flex justify-content-center align-items-stretch gap-5 flex-wrap'>
        <Card className='flex-element'>
            <Card.Body>
                <i className="bi bi-camera-video text-primary" style={{ fontSize: '24px' }}></i>
                <Card.Title className='mt-4 fs-3 fw-bold'>Terapia Online</Card.Title>
                <Card.Text className='text-gray-700'>
                    Sessões de terapia por vídeo, permitindo que você se conecte com seu psicólogo de qualquer lugar e a qualquer hora.
                </Card.Text>
            </Card.Body>
        </Card>
         <Card className='flex-element'>
            <Card.Body>
                <i className="bi bi-person-check text-primary" style={{ fontSize: '24px' }}></i>
                <Card.Title className='mt-4 fs-3 fw-bold'>Profissionais Qualificados</Card.Title>
                <Card.Text className='text-gray-700'>
                    Psicólogos experientes e licenciados, prontos para ajudar você a alcançar seu bem-estar mental.
                </Card.Text>
            </Card.Body>
        </Card>
         <Card className='flex-element'>
            <Card.Body>
                <i className="bi bi-shield-check text-primary" style={{ fontSize: '24px' }}></i>
                <Card.Title className='mt-4 fs-3 fw-bold'>Segurança e Privacidade</Card.Title>
                <Card.Text className='text-gray-700'>
                    Garantimos a confidencialidade e segurança dos seus dados durante todas as sessões de terapia.
                </Card.Text>
            </Card.Body>
        </Card>
    </Container>
  )
}

export default Services
