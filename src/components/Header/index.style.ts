import styled from '@emotion/styled';

export let HeaderWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 200px;
  background-color: #0d0d0d;
`;

export let LogoWrapper = styled.div``;

export let AddingBlock = styled.div`
  position: absolute;
  top: 172px;
  display: flex;
`;

export let StyledLogo = styled.img``;

export let InputAdd = styled.input`
  min-width: 670px;
  min-height: 50px;
  padding-left: 30px;
  background-color: #262626;
  border: 1px solid #262626;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 700;

  &::placeholder {
    color: white;
    opacity: 0.7;
  }
`;

export let ButtonAdd = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  margin-left: 50px;
  background-color: #1e6f9f;
  border-radius: 5px;
  border: 1px solid #1e6f9f;
  cursor: pointer;
  color: #ffffff;
  font-size: 20px;
`;

export let ButtonPlusSVG = styled.img`
  margin-left: 10px;
`;
