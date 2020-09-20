import { useMemo } from 'react';
import { UseButtonComponentType } from '../../common/types';
import { DefaultValuesEnum } from '../../common/enums';
import { uuidv4 } from '../../utils/uuid';

export const useComponent: UseButtonComponentType = (name, id) => {
  const ButtonName = useMemo(
    () => (name ? name : DefaultValuesEnum.ButtonName),
    [name]
  );
  const ButtonId = useMemo(() => {
    const usedID = id ? id : uuidv4();
    return `${ButtonName}-${usedID}`;
  }, [ButtonName, id]);
  return {
    ButtonId,
    ButtonName,
  };
};
