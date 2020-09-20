import { useMemo } from 'react';
import { UseModalComponentType } from '../../common/types';
import { uuidv4 } from '../../utils/uuid';

export const useComponent: UseModalComponentType = (id) => {
  const modalId = useMemo(() => (id ? id : uuidv4()), [id]);
  return {
    modalId,
  };
};
