import { InputKindsEnum } from '../common/enums';

export function setInputKind(type: undefined | string): InputKindsEnum {
  const kind =
    type &&
    Object.values(InputKindsEnum).find((kind) => kind === type.toLowerCase());
  return kind || InputKindsEnum.text;
}
