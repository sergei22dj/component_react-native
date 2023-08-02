import {FC, useState} from 'react';
import {ArrayValue, ItemData, SubItem} from '../../../types/dataTypes';
import {
  ArrayTableValue,
  BigBoldText,
  Button,
  GrayText,
  InfoWrapper,
  ItemWrapper,
  OpenIcon,
  SubTable,
  Table,
  TableItem,
  TableTitle,
  TableValue,
} from '../TrainingComponentStyles';
import {TouchableOpacity, View} from 'react-native';

const Item: FC<ItemData> = ({amount, count, id, isin, tableData, title}) => {
  const [openTable, setOpenTable] = useState(false);
  const [openSubTableIndexes, setOpenSubTableIndexes] = useState<number[]>([]);

  const handleViewClick = (index: number) => {
    if (openSubTableIndexes.includes(index)) {
      setOpenSubTableIndexes(prev => prev.filter(i => i !== index));
    } else {
      setOpenSubTableIndexes(prev => [...prev, index]);
    }
  };

  return (
    <>
      <ItemWrapper>
        <InfoWrapper>
          <GrayText>{title}</GrayText>
          <BigBoldText>{amount}</BigBoldText>
          <GrayText>ISIN: {isin}</GrayText>
        </InfoWrapper>
        <GrayText style={{marginRight: 'auto'}}>x {count} Units</GrayText>
        <TouchableOpacity onPress={() => setOpenTable(!openTable)}>
          <Button
            open={openTable}
            source={require('./../assets/buttonOpen.png')}
            alt="arrow img"
          />
        </TouchableOpacity>
      </ItemWrapper>
      {openTable && (
        <Table>
          {tableData.map((el: SubItem, index: number) => (
            <View key={index}>
              <TableItem>
                <TableTitle>{el.title}</TableTitle>
                {Array.isArray(el.value) ? (
                  <TouchableOpacity onPress={() => handleViewClick(index)}>
                    <ArrayTableValue>
                      <TableValue>
                        {openSubTableIndexes.includes(index) ? 'Close' : 'View'}
                      </TableValue>
                      <OpenIcon
                        open={openSubTableIndexes.includes(index)}
                        source={require('./../assets/subButtonOpen.png')}
                        alt="arrow img"
                      />
                    </ArrayTableValue>
                  </TouchableOpacity>
                ) : (
                  <TableValue>{el.value}</TableValue>
                )}
              </TableItem>
              {openSubTableIndexes.includes(index) && (
                <Table style={{marginTop: 10}}>
                  {Array.isArray(el.value) &&
                    el.value.map((item: ArrayValue, subIndex: number) => (
                      <TableItem style={{paddingLeft: 10}} key={subIndex}>
                        <TableTitle>{item.title}</TableTitle>
                        <TableValue>{item.value}</TableValue>
                      </TableItem>
                    ))}
                </Table>
              )}
            </View>
          ))}
        </Table>
      )}
    </>
  );
};

export default Item;
