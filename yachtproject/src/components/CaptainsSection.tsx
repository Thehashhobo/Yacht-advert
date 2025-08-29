import React from 'react';
import styles from './CaptainsSection.module.css';
import '../styles/typography.css';

const CaptainsSection: React.FC = () => {
  const captains = [
    {
      name: 'Captain Michael Thompson',
      experience: '15 years',
      specialties: ['Luxury Charters', 'Corporate Events', 'Coastal Navigation'],
      image: '/api/placeholder/300/400', // Replace with actual image
      bio: 'Master Mariner with extensive experience in Pacific Northwest waters. Specializes in luxury charters and corporate events.',
      certifications: ['Transport Canada Master Mariner', 'STCW Basic Safety', 'MED A3']
    },
    {
      name: 'Captain Sarah Martinez',
      experience: '12 years',
      specialties: ['Family Charters', 'Fishing Expeditions', 'Sunset Cruises'],
      image: '/api/placeholder/300/400', // Replace with actual image
      bio: 'Passionate about creating memorable family experiences on the water. Expert in local fishing spots and scenic routes.',
      certifications: ['Transport Canada Master 150GT', 'Marine Emergency Duties', 'ROC-MC']
    },
    {
      name: 'Captain James Wilson',
      experience: '20 years',
      specialties: ['Weddings', 'Private Events', 'Adventure Tours'],
      image: '/api/placeholder/300/400', // Replace with actual image
      bio: 'Veteran captain specializing in special occasions and adventure tours. Known for exceptional customer service.',
      certifications: ['Transport Canada Master 350GT', 'GMDSS', 'Advanced Firefighting']
    },
    {
      name: 'Captain Emma Chen',
      experience: '8 years',
      specialties: ['Eco Tours', 'Wildlife Watching', 'Educational Charters'],
      image: '/api/placeholder/300/400', // Replace with actual image
      bio: 'Marine biologist turned captain, passionate about marine conservation and educational experiences.',
      certifications: ['Transport Canada Master 60GT', 'Marine Mammal Observer', 'Wilderness First Aid']
    }
  ];

  return (
    <section className={styles.captainsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>Meet Our Captains</h2>
          <p>Experienced professionals dedicated to your safety and enjoyment</p>
        </div>
        <div className={styles.captainsGrid}>
          {captains.map((captain, index) => (
            <div key={index} className={styles.captainCard}>
              <div className={styles.captainImage}>
                <img src={captain.image} alt={captain.name} />
                <div className={styles.experienceBadge}>
                  {captain.experience}
                </div>
              </div>
              <div className={styles.captainInfo}>
                <h3>{captain.name}</h3>
                <p className={styles.captainBio}>{captain.bio}</p>
                <div className={styles.specialties}>
                  <h4>Specialties:</h4>
                  <div className={styles.specialtyTags}>
                    {captain.specialties.map((specialty, idx) => (
                      <span key={idx} className={styles.specialtyTag}>
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.certifications}>
                  <h4>Certifications:</h4>
                  <ul>
                    {captain.certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaptainsSection;