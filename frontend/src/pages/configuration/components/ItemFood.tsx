import EditIcon from '@/components/svg/EditIcon';
import { useState } from 'react';
import styles from '../styles/itemFood.module.css';
import TrashIcon from '@/components/svg/TrashIcon';

export default function ItemFood() {
  const [isHovered, setIsHovered] = useState({ edit: false, delete: false });

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    setIsHovered({ ...isHovered, [e.currentTarget.id]: true });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    setIsHovered({ ...isHovered, [e.currentTarget.id]: false });
  };

  return (
    <div className={styles.itemFoodContainer}>
      <span>comida rapida</span>
      <span>
        <strong>tiempo:</strong> 10 min
      </span>
      <section className={styles.iconsContainer}>
        <div id='edit' className={styles.iconContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <EditIcon stroke={isHovered.edit ? 'blue' : ''} svgProp={{ width: 30, height: 25 }} />
        </div>
        <div id='delete' className={styles.iconContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <TrashIcon stroke={isHovered.delete ? 'red' : ''} svgProp={{ width: 30, height: 25 }} />
        </div>
      </section>
    </div>
  );
}
