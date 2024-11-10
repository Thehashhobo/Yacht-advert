import React, { useState } from 'react';
import { Card, Modal, Button } from 'antd';
import '../App.css';
import m1 from '../assets/m1.webp';
import m2 from '../assets/m2.webp';
import m3 from '../assets/m3.webp';

const { Meta } = Card;

function RentalCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    description: string;
    image: string;
    features?: string[];
    pricePerDay: string;
  } | null>(null);

  const cards = [
    {
      title: 'Yacht 1',
      description: '24 foot',
      image: m1,
      features: ['Luxury interior', 'GPS navigation', 'Sun deck', 'Mini bar'],
      pricePerDay: '$500 per day',
    },
    {
      title: 'Yacht Services',
      description: '24 foot',
      image: m2,
      features: ['Engine inspection', 'Hull cleaning', 'Electronics check', 'Safety equipment servicing'],
      pricePerDay: '$400 per day',
    },
    {
      title: 'Europe Street Beat',
      description: '24 foot',
      image: m3,
      features: ['Professional guide', 'Multilingual support', 'Photography included', 'Flexible routes'],
      pricePerDay: '$600 per day',
    },
    {
      title: 'Luxury Rentals',
      description: 'Exclusive yacht rentals',
      image: m3,
      features: ['Captain and crew included', 'Fine dining onboard', 'Private cabins', 'Wi-Fi connectivity'],
      pricePerDay: '$750 per day',
    },
  ];

  const showModal = (card: { title: string; description: string; image: string; features?: string[]; pricePerDay: string }) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="flex-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          gap: '15px',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '-1.1rem',
        }}
      >
{cards.map((card, index) => (
  <div className="flex-item" key={index}>
    <Card
      className="custom-hover-card"
      hoverable
      style={{ marginTop: '-2rem', border: '4px solid white', width: '300px', height: '400px' }}
      cover={<img alt={card.title} src={card.image} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />}
      onClick={() => showModal(card)}
    >
      <Meta
        title={<span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{card.title}</span>}
        description={
          <>
            <p style={{ fontSize: '0.9rem', margin: 0 }}>{card.description}</p>
            <p style={{ fontSize: '0.9rem', fontWeight: 'bold', margin: 0 }}>{card.pricePerDay}</p>
          </>
        }
      />
    </Card>
  </div>
))}
</div>


      <Modal
        title={selectedCard?.title}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button type="primary" key="contact" onClick={() => alert('Contact Us clicked!')}>
            Contact Us
          </Button>,
        ]}
      >
        {selectedCard && (
          <>
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              style={{ width: '100%', marginBottom: '15px' }}
            />
            <p>{selectedCard.description}</p>
            <p style={{ fontWeight: 'bold' }}>Price: {selectedCard.pricePerDay}</p>
            <h4>Features:</h4>
            <ul>
              {selectedCard.features?.map((feature, index) => (
                <li style={{ marginLeft: '1rem' }} key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}
      </Modal>
    </>
  );
}

export default RentalCards;
