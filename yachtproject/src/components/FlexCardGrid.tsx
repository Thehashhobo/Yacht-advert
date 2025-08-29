import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './FlexCardGrid.module.css';
import c1 from '../assets/home/c2.webp';
import c2 from '../assets/home/s1.webp';
import c4 from '../assets/b/5.webp';

const { Meta } = Card;

function FlexCardGrid() {
  const navigate = useNavigate();

  const cardData = [
    { 
      title: 'Yacht Management', 
      description: 'Professional yacht management with comprehensive maintenance and care for your vessel.', 
      path: '/management', 
      image: c1 
    },
    { 
      title: 'Services and Repairs', 
      description: 'Expert repair services and maintenance to keep your yacht in pristine condition.', 
      path: '/services', 
      image: c2 
    },
    { 
      title: 'Yacht Rentals', 
      description: 'Luxury yacht rentals for unforgettable experiences on the water.', 
      path: '/rentals', 
      image: c4 
    },
  ];

  return (
    <div className={styles.flexContainer}>
      {cardData.map((card, index) => (
        <div className={styles.flexItem} key={index}>
          <Card
            className={styles.customHoverCard}
            hoverable
            cover={
              <div className={styles.cardCover}>
                <img
                  alt={card.title}
                  src={card.image}
                  className={styles.cardImage}
                />
              </div>
            }
            onClick={() => navigate(card.path)}
          >
            <Meta 
              title={<span className={styles.cardTitle}>{card.title}</span>} 
              description={<span className={styles.cardDescription}>{card.description}</span>} 
            />
          </Card>
        </div>
      ))}
    </div>
  );
}

export default FlexCardGrid;
