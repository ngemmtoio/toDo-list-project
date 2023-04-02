import React, { useState } from 'react';
import checkboxSVG from '../../assets/checkbox.svg';
import ClearSVG from '../../assets/trash.svg';

import {
  ItemWrapper,
  ItemCheckBox,
  ItemText,
  ItemBottomClear,
  CheckboxIcon,
  ButtonClearImage,
} from './index.style';

interface ITodoItem {
  text: string;
}

export function TodoItem({ text }: ITodoItem) {
  let [isChecked, setChecked] = useState(false);
  return (
    <ItemWrapper>
      <ItemCheckBox onClick={() => setChecked((prevState) => !prevState)}>
        {isChecked && <CheckboxIcon src={checkboxSVG} alt="checkbox" />}
      </ItemCheckBox>
      <ItemText>{text}</ItemText>
      <ItemBottomClear>
        <ButtonClearImage src={ClearSVG} alt="Logo" />
      </ItemBottomClear>
    </ItemWrapper>
  );
}
