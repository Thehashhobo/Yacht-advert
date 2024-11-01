import React from 'react';
import { Card } from 'antd';
import '../App.css'; // Import your CSS
import m1 from '../assets/m1.webp';

const { Meta } = Card;

function FlexCardGrid() {
  return (
    <div
      className="flex-container"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        gap: '15px', // Optional gap for spacing between cards
        justifyContent: 'center', // Center items horizontally
        alignItems: 'center',
        marginLeft: '-1.1rem',
         // Center items vertically
      }}
    >
        <div className="flex-item">
          <Card
            className="custom-hover-card"
            hoverable
            style={{marginTop:'-2rem', border: '4px solid white', zIndex: 2 }}
            cover={
              <img
                alt="example"
                src={m1}
              />
            }
          >
            <Meta title="Yacht Management" description="www.instagram.com" />
          </Card>
        </div>

        <div className="flex-item custom-hover-card-2" >
          <Card
            className="custom-hover-card "
            hoverable
            style={{marginTop:'-2rem', border: '4px solid white' }}
            cover={
              <img
                alt="example"
                src={m1}
              />
            }
          >
            <Meta title="Services" description="www.instagram.com" />
          </Card>
        </div>

        <div className="flex-item">
          <Card
            className="custom-hover-card"
            hoverable
            style={{marginTop:'-2rem', border: '4px solid white' }}
            cover={
              <img
                alt="example"
                src={m1}
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>

        <div className="flex-item custom-hover-card-2">
          <Card
            className="custom-hover-card custom-hover-card-2"
            hoverable
            style={{marginTop:'-2rem', border: '4px solid white' }}
            cover={
              <img
                alt="example"
                src={m1}
              />
            }
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>
        </div>
        </div>
  );
}

export default FlexCardGrid;
