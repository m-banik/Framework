import { DataType, DataSetOfWrongFormatType } from '../common/types';

export const dataSetI: DataType = {
  type: 'Modal',
  children: [
    { type: 'Input', props: { name: 'Login' } },
    { type: 'Input', props: { name: 'Password', type: 'Password' } },
    { type: 'Button', props: { name: 'Submit' } },
  ],
};

export const dataSetII: DataType = {
  type: 'Modal',
  children: [
    {
      type: 'Input',
      props: { name: 'Login' },
      children: [{ type: 'Button', props: { name: 'Zmień', disabled: true } }],
    },
    {
      type: 'Input',
      props: {
        name: 'Password',
        type: 'Password',
        onChange: () => alert('Zmiana w Password!'),
      },
      children: {
        type: 'Input',
        props: {
          name: 'Textarea',
          type: 'textarea',
          readOnly: true,
          placeholder: 'Pole tylko do odczytu',
        },
      },
    },
    {
      type: 'Button',
      props: { name: 'Submit', onClick: () => alert('Click!') },
      children: [
        { type: 'Input', props: { name: 'Checkbox', type: 'CHECKBOX' } },
        { type: 'Input', props: { name: 'Dodaj', type: 'file' } },
      ],
    },
  ],
};

export const dataSetIII: DataType = {
  type: 'Modal',
  children: [
    {
      type: 'Input',
      props: { name: 'Zaznacz', type: 'checkbox' },
      children: { type: 'Button', props: { name: 'Zmień' } },
    },
    {
      type: 'Button',
      props: { name: 'OK' },
      children: {
        type: 'Input',
        props: { name: 'Komentarz', type: 'textarea' },
      },
    },
  ],
};

export const dataSetIV: DataType = {
  type: 'Modal',
  props: { name: 'Modal' },
  children: [
    { type: 'Input', props: { type: 'text', name: 'login' } },
    { type: 'Input', props: { type: 'text', name: 'login' } },
    { type: 'Input', props: { type: 'bla', name: 'random' } },
    { type: 'Input', props: { type: 'number', name: 'number' } },
    { type: 'Input', props: { type: 'password', name: 'password' } },
    { type: 'Input', props: { name: 'empty' } },
    { type: 'Button', props: { name: 'start' } },
  ],
};

export const emptyModalDataSet: DataType = {
  type: 'Modal',
};

export const wrongDataSet: DataSetOfWrongFormatType = {
  type: '',
};
