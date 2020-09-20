import React from 'react';
import { useComponent } from './hook';
import styles from './styles.module.css';
import { InputKindsEnum } from '../../common/enums';
import { ComponentGenericType } from '../../common/types';

export const Input: ComponentGenericType = (props) => {
  const { type, name, children, id, ...otherPops } = props;
  const { inputId, inputName, inputKind } = useComponent(type, name, id);
  return (
    <div key={inputId}>
      <label className={styles.label} htmlFor={inputId}>
        <div className={styles.inputDescription}>{inputName}:</div>
        {inputKind === InputKindsEnum.textarea ? (
          <textarea
            {...otherPops}
            id={inputId}
            name={inputName}
            className={styles.textarea}
          ></textarea>
        ) : (
          <input
            {...otherPops}
            id={inputId}
            type={inputKind}
            className={styles.input}
          />
        )}
      </label>
      {!!children ? children : null}
    </div>
  );
};
