import React from 'react';
import { Header } from '../Header';
import { MainContent } from '../Main';
import { Wrapper } from './index.style';

export interface ILayout {}

export function Layout() {
  return (
    <Wrapper>
      <Header></Header>
      <MainContent></MainContent>
    </Wrapper>
  );
}
