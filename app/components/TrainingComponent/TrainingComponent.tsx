import React from 'react';
import {data} from '../../../mock/data';
import {MainWrapper} from './TrainingComponentStyles';
import Item from './components/Item';

const TrainingComponenet = () => {
  return (
    <MainWrapper>
      {data.map(el => (
        <Item
          key={el.id}
          id={el.id}
          title={el.title}
          amount={el.amount}
          count={el.count}
          isin={el.isin}
          tableData={el.tableData}
        />
      ))}
    </MainWrapper>
  );
};
export default TrainingComponenet;
