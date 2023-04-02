import styled from '@emotion/styled';

export let WrapperMainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 855px;
`;

export let WrapperCounters = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;

export let WrapperComponentCounter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
`;

export let CounterText = styled.p`
  color: #1e6f9f;
  font-size: 18px;
`;

export let CounterNum = styled.p`
  color: white;
  font-size: 18px;
  padding: 2px 10px;
  background-color: black;
  border-radius: 40%;
  text-align: center;
`;

export let ImgNoContent = styled.img``;

export let WrapperNoContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  padding-top: 100px;
  border-top: 1px solid #808080;
  border-radius: 20px 20px 0 0;
`;

export let NoContentText = styled.p`
  max-width: 330px;
  margin-top: 40px;
  text-align: center;
  color: #808080;
  font-size: 20px;
`;
