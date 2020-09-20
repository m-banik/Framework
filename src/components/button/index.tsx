import React from 'react';
import { useComponent } from './hook';
import styles from './styles.module.css';
import { ComponentGenericType } from '../../common/types';

export const Button: ComponentGenericType = (props) => {
  const { name, children, id, type, ...otherProps } = props;
  const { ButtonId, ButtonName } = useComponent(name, id);
  return (
    <div key={ButtonId}>
      {!!children ? children : null}
      <button {...otherProps} className={styles.button}>
        {ButtonName}
      </button>
    </div>
  );
};
