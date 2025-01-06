import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import your CSS
import c1 from '../assets/c2.webp';
import c2 from '../assets/s1.webp';
import c4 from '../assets/c3.webp';

const { Meta } = Card;

function FlexCardGrid() {
  const navigate = useNavigate();

  const cardData = [
    { title: 'Yacht Management', description: '', path: '/management', image: c1 },
    { title: 'Services and Repairs', description: '', path: '/services', image: c2  },
    { title: 'Rentals', description: '', path: '/rentals', image: c4  },
  ];

  return (
<div
  className="flex-container"
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  }}
>
  {cardData.map((card, index) => (
    <div className="flex-item" key={index} style={{ flex: '1 1 300px', maxWidth: '300px' }}>
      <Card
        className="custom-hover-card"
        hoverable
        style={{
          marginTop: '-2rem',
          zIndex: 2,
        }}
        cover={
          <div
            style={{
              height: '200px', // Top portion for the image
              overflow: 'hidden',
            }}
          >
            <img
              alt={card.title}
              src={card.image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // Ensures the entire background image is displayed
              }}
            />
          </div>
        }
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
