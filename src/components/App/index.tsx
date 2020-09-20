import React from 'react';
import { parseComponentData } from '..';
import * as dataSets from '../../data';
import { NotificationsEnum } from '../../common/enums';

export const App: React.FC = () => {
  const content = parseComponentData(dataSets.dataSetI);
  return !!content ? content : <h1>{NotificationsEnum.wrongData}</h1>;
};
