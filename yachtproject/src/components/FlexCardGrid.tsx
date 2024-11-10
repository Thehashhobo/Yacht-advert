import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import your CSS
import m1 from '../assets/m1.webp';

const { Meta } = Card;

function FlexCardGrid() {
  const navigate = useNavigate();

  const cardData = [
    { title: 'Yacht Management', description: 'Management', path: '/management' },
    { title: 'Services', description: 'Services', path: '/services' },
    { title: 'Repairs', description: 'Repairs', path: '/repairs' },
    { title: 'Rentals', description: 'Rentals', path: '/rentals' },
  ];

  return (
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
      {cardData.map((card, index) => (
        <div className="flex-item" key={index}>
          <Card
            className="custom-hover-card"
            hoverable
            style={{ marginTop: '-2rem', border: '4px solid white', zIndex: 2 }}
            cover={<img alt={card.title} src={m1} />}
            onClick={() => navigate(card.path)}
          >
            <Meta title={card.title} description={card.description} />
          </Card>
        </div>
      ))}
    </div>
  );
}

export default FlexCardGrid;
