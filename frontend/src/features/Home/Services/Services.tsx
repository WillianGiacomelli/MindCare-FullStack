import React from 'react'
import './Services.css'
import { Button, Container } from 'react-bootstrap'
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

        <div className='w-100 text-start mt-4'>
            <h3 className='text-bold fs-1 w-75 mb-2'>Para pacientes: Encontre o apoio que você precisa</h3>
            <p>Cuidar da saúde mental nunca foi tão simples. Conte conosco para ajudar você nessa jornada.</p>
            <Button className='flex-sm-column flex-md-row w-sm-100' variant="primary">Buscar psicólogo</Button>

            <div className='mh-400px d-flex justify-content-between align-items-stretch mt-5 flex-wrap gap-4'>
                <div className=''>
                    <div className='img-1'>

                    </div>
                    <img  alt="" className='rounded-5' src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyjnBD5gw6DQmQl7zbNzi1QETzKGusPj0LUILhq98cfYNWEk2imWQA64WBQLWCR2VbGd0GcnljOEROjwH4fONGazS6b7TMsM6dUiBZ7zUHS1U3f4IOKp15Cfx9hLXb9R6hEf5eUuChplpqaeCrc5KL2PyjY0KOAgWSBFYkqPZetfx2TzXFgbVofrfg2RqIz13Ee1t0_tHqGvoDu9GaEr0WChaQM79RdbyzSGZxuXmQKcvT9w0QtybjmSqWKBQE36OLnFNV6ZFUDw6n"/>
                    <h4 className='mt-3 fw-bold'>Encontre</h4>
                    <p className='text-gray-500'>Busque psicólogos por especialidade, localização e disponibilidade.</p> 
                </div>
                <div className=''>
                    <div className='img-2'>
        
                    </div>
                    <img  alt="" className='rounded-5' src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyjnBD5gw6DQmQl7zbNzi1QETzKGusPj0LUILhq98cfYNWEk2imWQA64WBQLWCR2VbGd0GcnljOEROjwH4fONGazS6b7TMsM6dUiBZ7zUHS1U3f4IOKp15Cfx9hLXb9R6hEf5eUuChplpqaeCrc5KL2PyjY0KOAgWSBFYkqPZetfx2TzXFgbVofrfg2RqIz13Ee1t0_tHqGvoDu9GaEr0WChaQM79RdbyzSGZxuXmQKcvT9w0QtybjmSqWKBQE36OLnFNV6ZFUDw6n"/>
                    <h4 className='mt-3 fw-bold'>Encontre</h4>
                    <p className='text-gray-500'>Busque psicólogos por especialidade, localização e disponibilidade.</p> 
                </div>
                <div className=''>
                    <div className='img-3'>
        
                    </div>
                    <img  alt="" className='rounded-5' src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyjnBD5gw6DQmQl7zbNzi1QETzKGusPj0LUILhq98cfYNWEk2imWQA64WBQLWCR2VbGd0GcnljOEROjwH4fONGazS6b7TMsM6dUiBZ7zUHS1U3f4IOKp15Cfx9hLXb9R6hEf5eUuChplpqaeCrc5KL2PyjY0KOAgWSBFYkqPZetfx2TzXFgbVofrfg2RqIz13Ee1t0_tHqGvoDu9GaEr0WChaQM79RdbyzSGZxuXmQKcvT9w0QtybjmSqWKBQE36OLnFNV6ZFUDw6n"/>
                    <h4 className='mt-3 fw-bold'>Encontre</h4>
                    <p className='text-gray-500'>Busque psicólogos por especialidade, localização e disponibilidade.</p> 
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Services