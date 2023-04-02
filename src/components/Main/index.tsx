import React from 'react';
import NoContentSVG from '../../assets/no-content.svg';
import { TodoItem } from '../TodoItem';
import {
  WrapperMainContent,
  WrapperCounters,
  WrapperComponentCounter,
  CounterText,
  CounterNum,
  WrapperNoContent,
  NoContentText,
  ImgNoContent,
} from './index.style';

export interface IMainContent {}

export function MainContent() {
  return (
    <WrapperMainContent>
      <WrapperCounters>
        <WrapperComponentCounter>
          <CounterText>Tarefas criadas</CounterText>
          <CounterNum>0</CounterNum>
        </WrapperComponentCounter>
        <WrapperComponentCounter>
          <CounterText>Concluídas</CounterText>
          <CounterNum>0</CounterNum>
        </WrapperComponentCounter>
      </WrapperCounters>
      <WrapperNoContent>
        <ImgNoContent src={NoContentSVG} alt="No Content" />
        <NoContentText>
          Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
          itens a fazer
        </NoContentText>
      </WrapperNoContent>
      <TodoItem text="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."></TodoItem>
    </WrapperMainContent>
  );
}
