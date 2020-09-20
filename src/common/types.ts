import { InputKindsEnum } from './enums';

export type Id = string;

export type ComponentGenericType = (props: {
  name?: string;
  type?: string;
  id?: Id;
  children?: JSX.Element | (JSX.Element | null)[];
}) => JSX.Element;

export type ComponentsType = {
  Input: ComponentGenericType;
  Modal: ComponentGenericType;
  Button: ComponentGenericType;
};

export type ComponentsKeysType = keyof ComponentsType;

export type UseModalComponentType = (
  id: Id | undefined
) => {
  modalId: Id;
};

export type UseInputComponentType = (
  type: string | undefined,
  name: string | undefined,
  id: Id | undefined
) => {
  inputId: Id;
  inputName: string;
  inputKind: InputKindsEnum;
};

export type UseButtonComponentType = (
  name: string | undefined,
  id: Id | undefined
) => {
  ButtonId: Id;
  ButtonName: string;
};

export type DataType = {
  type: string;
  props?: {
    name: string;
    type?: string;
    readOnly?: boolean;
    disabled?: boolean;
    placeholder?: string;
    onClick?: Function;
    onChange?: Function;
  };
  children?: DataType | DataType[];
};

export type DataSetOfWrongFormatType = {
  type: string;
};

export type ParseComponentDataType = (
  data: DataType,
  id?: Id
) => JSX.Element | null;
