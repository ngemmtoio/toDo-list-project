import styled from '@emotion/styled';

export let ItemWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-column-gap: 10px;
  margin-top: 20px;
  padding: 10px 30px;
  background-color: #262626;
  border: 1px solid #262626;
  border-radius: 15px;
`;

export let ItemCheckBox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #5e60ce;
  cursor: pointer;
`;

export let CheckboxIcon = styled.img``;

export let ItemText = styled.p`
  width: 600px;
  color: #ffffff;
  font-size: 16px;
`;

export let ItemBottomClear = styled.button`
  background-color: #262626;
  border: 1px solid #262626;
  cursor: pointer;
`;

export let ButtonClearImage = styled.img``;
