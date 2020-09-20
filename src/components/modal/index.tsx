import React from 'react';
import { useComponent } from './hook';
import styles from './styles.module.css';
import { NotificationsEnum } from '../../common/enums';
import { ComponentGenericType } from '../../common/types';

const renderPlaceholderChildren = (
  notification: string = NotificationsEnum.modalHasNoChildren
) => <p>{notification}</p>;

export const Modal: ComponentGenericType = ({ name, children, id }) => {
  const { modalId } = useComponent(id);
  return (
    <div className={styles.modalOverlay} key={modalId}>
      <div className={styles.modal}>
        {name ? <h1 className={styles.modalHeader}>{name}</h1> : null}
        <div className={styles.modalContent}>
          {!!children ? children : renderPlaceholderChildren()}
        </div>
      </div>
    </div>
  );
};
