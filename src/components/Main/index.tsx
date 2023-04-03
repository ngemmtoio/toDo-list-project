import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
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

interface ITodo {
  checked: boolean;
  id: string;
  text: string;
}

export function MainContent({}: IMainContent) {
  let [todo, setTodo] = useState<ITodo[]>();

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await axios.get(
          'https://64298eb65a40b82da4d580de.mockapi.io/Todo',
        );
        setTodo(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  console.log(todo);

  let renderedToDoItems = useMemo(
    () =>
      todo?.map((item) => (
        <TodoItem text={item.text} key={item.id} checked={item.checked} />
      )),
    [todo],
  );

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
      {Boolean(todo?.length) && renderedToDoItems}
      {Boolean(!todo?.length) && (
        <WrapperNoContent>
          <ImgNoContent src={NoContentSVG} alt="No Content" />
          <NoContentText>
            Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
            itens a fazer
          </NoContentText>
        </WrapperNoContent>
      )}
    </WrapperMainContent>
  );
}
