import React from 'react';
import Card from 'react-bootstrap/esm/Card';
import './CustomCard.css';

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const CustomCard = ({icon, title, description}: CardProps) => {
  return (
   <Card className='flex-element'>
    <Card.Body>
        <i className={icon} style={{ fontSize: '24px' }}></i>
        <Card.Title className='mt-4 fs-3 fw-bold'>{title}</Card.Title>
        <Card.Text className='text-gray-700'>
            {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
