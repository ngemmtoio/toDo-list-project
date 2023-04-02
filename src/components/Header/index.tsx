import React from 'react';
import LogoSVG from '../../assets/logo.svg';
import ButtonSVG from '../../assets/plus.svg';
import {
  HeaderWrapper,
  LogoWrapper,
  AddingBlock,
  InputAdd,
  ButtonAdd,
  StyledLogo,
  ButtonPlusSVG,
} from './index.style';

export interface IHeader {}

export function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <StyledLogo src={LogoSVG} alt="Logo" />
      </LogoWrapper>
      <AddingBlock>
        <InputAdd placeholder="Adicione uma nova tarefa" />
        <ButtonAdd>
          <ButtonPlusSVG src={ButtonSVG} alt="Logo" />
          Criar
        </ButtonAdd>
      </AddingBlock>
    </HeaderWrapper>
  );
}
