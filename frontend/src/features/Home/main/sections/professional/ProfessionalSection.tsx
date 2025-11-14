import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/esm/Container'

const ProfessionalSection = () => {
  return (
    <Container className='my-5'>
        <div className='bg-white w-100 text-start mt-4'>
                <h3 className='text-bold fs-1 w-75 mb-2'>Para pacientes: Encontre o apoio que você precisa</h3>
                <p>Cuidar da saúde mental nunca foi tão simples. Conte conosco para ajudar você nessa jornada.</p>
                <Button className='flex-sm-column flex-md-row w-sm-100' variant="primary">Buscar psicólogo</Button>
        </div>
    </Container>
  )
}

export default ProfessionalSection
