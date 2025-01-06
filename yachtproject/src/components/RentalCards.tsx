import { useState, useRef } from 'react';
import { Card, Modal, Button } from 'antd';
import FlexModalForm, { FlexModalFormProps } from '../components/FlexModelForm';
import '../App.css';
import m1 from '../assets/m/6.webp';
import m2 from '../assets/m/1.webp';
import m3 from '../assets/m/2.webp';
import m4 from '../assets/m/3.webp';
import m5 from '../assets/m/4.webp';
import m6 from '../assets/m/5.webp';
import y1 from '../assets/b/5.webp';
import y2 from '../assets/b/1.webp';
import y3 from '../assets/b/2.webp';
import y4 from '../assets/b/3.webp';
import y5 from '../assets/b/4.webp';

const { Meta } = Card;

function RentalCards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<{
    title: string;
    description: string;
    images: string[];
    features?: string[];
    pricePerDay: string;
  } | null>(null);

  const modalScrollRef = useRef<HTMLDivElement>(null);

  const cards = [
    {
      title: 'Yalla Habibi',
      description: '46 ft: 12 guests',
      images: [y1, y2, y3, y4, y5],
      features: ['2 bedrooms, 1 bathroom', 'Captain Included'],
      pricePerDay: '$350 per hour',
    },
    {
      title: 'Meridian 441',
      description: '48 ft: 15 guests',
      images: [m1, m2, m3, m4, m5, m6],
      features: ['2 bedrooms, 1 bathroom', 'Captain Included'],
      pricePerDay: '$500 per hour',
    },
  ];

  const showModal = (card: { title: string; description: string; images: string[]; features?: string[]; pricePerDay: string }) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const scrollLeft = () => {
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollBy({
        left: -modalScrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (modalScrollRef.current) {
      modalScrollRef.current.scrollBy({
        left: modalScrollRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOpenModal = () => setIsModalVisible(true);
  const handleCloseModal = () => setIsModalVisible(false);
  const handleSubmit = (values: any) => {
    console.log('Submitted values:', values);
  };

  const fields: FlexModalFormProps['fields'] = [
    { name: 'Name', label: 'Name', type: 'text', rules: [{ required: true }] },
    { name: 'Email', label: 'Email Address', type: 'text', rules: [{ required: true }] },
    { 
      name: 'Model', 
      label: 'Vessel of Interest', 
      type: 'select', 
      options: [
        { label: 'Yalla Habibi', value: 'Yalla Habibi' },
        { label: 'Meridian 441', value: 'Meridian 441' },
      ], 
      rules: [{ required: true }] 
    },
    { 
      name: 'Date', 
      label: 'Preferred Date', 
      type: 'date', 
      
    },
    { name: 'Info', label: 'Tell us more', type: 'text'},
  ];
  

  return (
    <>
      <div style={{ zIndex: 3 }} className="flex-container-r">
        {cards.map((card, index) => (
          <div className="flex-item-r" key={index}>
            <Card
              className="custom-hover-card"
              hoverable
              onClick={() => showModal(card)}
              cover={
                <div className="card-image">
                  <img alt={card.title} src={card.images[0]} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                </div>
              }
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
          <Button type="primary" key="contact" onClick={handleOpenModal}>
            Contact Us
          </Button>,
        ]}
      >
        {selectedCard && (
          <>
            <div className="modal-image-gallery">
              <button className="scroll-button left" onClick={scrollLeft}>
                &#8249;
              </button>
              <div className="modal-image-scroll" ref={modalScrollRef}>
                {selectedCard.images.map((image, imgIndex) => (
                  <div className="modal-image-scroll-item" key={imgIndex}>
                    <img alt={`${selectedCard.title} - ${imgIndex + 1}`} src={image} />
                  </div>
                ))}
              </div>
              <button className="scroll-button right" onClick={scrollRight}>
                &#8250;
              </button>
            </div>
            <p>{selectedCard.description}</p>
            <p style={{ fontWeight: 'bold' }}>Price: {selectedCard.pricePerDay}</p>
            <h4>Features:</h4>
            <ul>
              {selectedCard.features?.map((feature, index) => (
                <li style={{ marginLeft: '1rem' }} key={index}>
                  {feature}
                </li>
              ))}
            </ul>
          </>
        )}
      </Modal>
      <FlexModalForm
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        fields={fields}
        title="Rental Services Inquiry"
      />
    </>
  );
}

export default RentalCards;
