import { Button, Container } from 'react-bootstrap'
import './CustomerSection.css'
import CustomCard from '../../../../../../shared/Home/Card/CustomCard';

const CustomerSection = () => {
    const cardData = [
        {
            icon: "bi bi-camera-video text-primary",
            title: "Terapia Online",
            description: "Sessões de terapia por vídeo, permitindo que você se conecte com seu psicólogo de qualquer lugar e a qualquer hora."
        },
        {
            icon: "bi bi-person-check text-primary",
            title: "Profissionais Qualificados",
            description: "Psicólogos experientes e licenciados, prontos para ajudar você a alcançar seu bem-estar mental."
        },
        {
            icon: "bi bi-shield-check text-primary",
            title: "Segurança e Privacidade",
            description: "Garantimos a confidencialidade e segurança dos seus dados durante todas as sessões de terapia."
        }
    ];

    return (
        <Container className='my-5 d-flex justify-content-center align-items-stretch gap-5 flex-wrap' id="services">
            {cardData.map((card, index) => (
                <CustomCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                />
            ))}

            <div className='w-100 text-start my-4 mb-5' id="customer">
                <h3 className='text-bold fs-1 w-75 mb-2'>Para pacientes: Encontre o apoio que você precisa</h3>
                <p>Cuidar da saúde mental nunca foi tão simples. Conte conosco para ajudar você nessa jornada.</p>
                <Button className='flex-sm-column flex-md-row w-sm-100' variant="primary">Buscar psicólogo</Button>

                <div className='d-flex justify-content-between mt-5 flex-wrap gap-4'>
                    <div className='flex-element'>
                        <img alt="" className='rounded-5' src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyjnBD5gw6DQmQl7zbNzi1QETzKGusPj0LUILhq98cfYNWEk2imWQA64WBQLWCR2VbGd0GcnljOEROjwH4fONGazS6b7TMsM6dUiBZ7zUHS1U3f4IOKp15Cfx9hLXb9R6hEf5eUuChplpqaeCrc5KL2PyjY0KOAgWSBFYkqPZetfx2TzXFgbVofrfg2RqIz13Ee1t0_tHqGvoDu9GaEr0WChaQM79RdbyzSGZxuXmQKcvT9w0QtybjmSqWKBQE36OLnFNV6ZFUDw6n" />
                        <h4 className='mt-3 fw-bold'>Encontre</h4>
                        <p className='text-gray-500'>Busque psicólogos por especialidade, localização e disponibilidade.</p>
                    </div>
                    <div className='flex-element'>
                        <img alt="" className='rounded-5' src="https://lh3.googleusercontent.com/aida-public/AB6AXuBh7N_0j_Tb8hRGA-TSO7uqcbYW30UcEUtn7XWvMxO5rLfTenDM7CXfzBMjLgnUCveiru8-vRYjDPH02WC3fWc_pbGsblEjPgwH-1251IIu4EZ2WsIYj-nUK5ewU_4S8Za5l_oICUcIfG9oqhQQwCZn1SYtknTgdz9UmMaDqvsyOW05h8eUEQ295zpM4VwYTKFQ6BpM6XxZVG5UrBWvoPD8eX5vZr6SIJ3BC9s-sbh-pGfG_FqnTyghehJbAksOhaPzfnOLHNyaOEze" />
                        <h4 className='mt-3 fw-bold'>Agende</h4>
                        <p className='text-gray-500'>Escolha o melhor horario na agenda e marque sua sessão online ou presencial.</p>
                    </div>
                    <div className='flex-element'>
                        <img alt="" className='rounded-5' src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5GSsyjQOLEArdiMdLEy1wFwHM7wMLJvrt_D_DAHRX2_6_53P9X434DnelPCfaASqFoY90_lBZvgfzxvS99Bypjfq-N1C2t4UZV1ucEaXOOhdzrcJDNHvQHUhSBLtTnfhjw7sLS8tDavTu6bmS1bSbm1B-UhxaJMDUaQmt4AHgunPyF7lTkLBS3vcyXtmX8s7sjLKEBOY-2uO7ngCei7a2PxSJmJgKEkg1Z8BI35PGlVA1yQii8Sry6dFB7mARWosmxFvzu4okI-PM" />
                        <h4 className='mt-3 fw-bold'>Conecte-se</h4>
                        <p className='text-gray-500'>Realize sua sessão por video ou presencial.</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CustomerSection