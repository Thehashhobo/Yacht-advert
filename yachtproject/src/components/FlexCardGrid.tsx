import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './FlexCardGrid.module.css';
import c1 from '../assets/c2.webp';
import c2 from '../assets/s1.webp';
import c4 from '../assets/c3.webp';

const { Meta } = Card;

function FlexCardGrid() {
  const navigate = useNavigate();

  const cardData = [
    { title: 'Yacht Management', description: '', path: '/management', image: c1 },
    { title: 'Services and Repairs', description: '', path: '/services', image: c2 },
    { title: 'Rentals', description: '', path: '/rentals', image: c4 },
  ];

  return (
    <div className={styles.flexContainer}>
      {cardData.map((card, index) => (
        <div className={styles.flexItem} key={index}>
          <Card
            className={styles.customHoverCard}
            hoverable
            cover={
              <div
                style={{
                  height: '200px', 
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
