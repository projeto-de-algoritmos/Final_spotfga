import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #8755ad;
  border-radius: 8px;
  padding: 20px;
`;

export const CardPicture = styled.div`
  min-width: 124px;
  min-height: 124px;
  border-radius: 50%;
  background-color: #8755ad;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 30px;
`;
