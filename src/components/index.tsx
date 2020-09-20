import { Input } from './input';
import { Modal } from './modal';
import { Button } from './button';
import {
  ComponentsType,
  ComponentsKeysType,
  ParseComponentDataType,
} from '../common/types';
import { DefaultValuesEnum } from '../common/enums';
import { uuidv4 } from '../utils/uuid';

export const Components: ComponentsType = {
  Input,
  Modal,
  Button,
};

export function checkIfComponentExistsByType(
  type: string | ComponentsKeysType
): type is ComponentsKeysType {
  return Components[type as ComponentsKeysType] !== undefined;
}

export function getComponentByType<K extends ComponentsKeysType>(key: K) {
  return Components[key];
}

export const parseComponentData: ParseComponentDataType = (
  data,
  id = uuidv4()
) => {
  if (data && data.type && checkIfComponentExistsByType(data.type)) {
    const { type, props, children } = data;
    const Component = getComponentByType(type);
    let parsedChildren: (JSX.Element | null)[] = [];
    if (children && children instanceof Array) {
      parsedChildren = children.map((child) =>
        parseComponentData(child, uuidv4())
      );
    } else if (children) {
      parsedChildren.push(parseComponentData(children));
    }
    const Props = {
      ...props,
      name: props && props.name ? props.name : DefaultValuesEnum.emptyString,
      children: [...parsedChildren],
      id,
    };
    return Component(Props);
  }
  return null;
};
