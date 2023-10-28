export interface ArrayValue {
    title: string;
    value: string;
}

export interface SubItem {
    title: string;
    value: string | ArrayValue[];
  }
  
 export interface ItemData {
    id: number;
    title: string;
    amount: string;
    count: string;
    isin: string;
    tableData: SubItem[];
  }