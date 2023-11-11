import styled from 'styled-components';

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100%) / 4);
  background-color: ${({ color }) => color};
  padding: 8px 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-shadow: 0px 0px 4px #000000;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 auto 20px auto;
`;

export const StatisticsWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 0 0 0;
  width: 480px;
  background-color: #fffff4;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
  width: 100%;
  margin: 0;
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
