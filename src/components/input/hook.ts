import { useMemo } from 'react';
import { UseInputComponentType } from '../../common/types';
import { DefaultValuesEnum } from '../../common/enums';
import { setInputKind } from '../../utils/setInputKind';
import { uuidv4 } from '../../utils/uuid';

export const useComponent: UseInputComponentType = (type, name, id) => {
  const inputName = useMemo(() => (name ? name : DefaultValuesEnum.InputName), [
    name,
  ]);
  const inputId = useMemo(() => {
    const usedID = id ? id : uuidv4();
    return `${inputName}-${usedID}`;
  }, [inputName, id]);
  const inputKind = useMemo(() => setInputKind(type), [type]);
  return {
    inputId,
    inputName,
    inputKind,
  };
};
