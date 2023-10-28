import { styled } from "styled-components/native";
// import { theme } from "~/ui/theme/default/theme";
import React from "react";


export const MainWrapper = styled.View`
padding: 16px;
display: flex;
flex-direction: column;
row-gap: 24px;
background-color: white;
border-radius: 12px;
`;
export const ItemWrapper = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
export const InfoWrapper = styled.View`
display: flex;
flex-direction: column;
justify-content: space-between;
row-gap: 8px;
`;
export const BigBoldText = styled.Text`
font-size: 20px;
font-weight: 400;
color: gray;
`;
export const GrayText = styled.Text`
font-size: 12px;
font-weight: 400;
color: gray;
`;
export const TableTitle = styled.Text`
font-size:12px;
font-weight: 600;
color: gray;
`;
export const TableValue = styled.Text`
font-size: 12px;
font-weight: 400;
color: gray;
`;
export const Button = styled.Image<{open: boolean}>`
margin: 9px 6px;
transform: rotate(${p => p.open ? '180deg' : '0deg'});
`;
export const Table = styled.View`
display: flex;
row-gap: 8px;
height: 100%;
`;
export const TableItem = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
export const SubTable = styled.View`
display: flex;
flex-direction: column;
row-gap: 8px;
margin-left: 10px;
`;
export const OpenIcon = styled.Image<{open: boolean}>`
transform: rotate(${p => p.open ? '90deg' : '0deg'});
`;
export const ArrayTableValue = styled.View`
display: flex;
flex-direction: row;
align-items: center;
column-gap: 5px;
`;