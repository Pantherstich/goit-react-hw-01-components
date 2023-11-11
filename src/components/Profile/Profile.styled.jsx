import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 0;
  background-color: #fffff4;
  width: 480px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Avatar = styled.img`
  width: 240px;
  border-radius: 100%;
  background-color: #f7ffc3;
`;

export const UserName = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

export const Tag = styled.p`
  font-weight: bold;
  font-style: italic;
  margin-bottom: 8px;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0;
  width: 100%;

  margin: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  background-color: #bebebe;
  border-top: 1px solid #4a4a4a;
  &:nth-child(2) {
    border-left: 1px solid #4a4a4a;
    border-right: 1px solid #4a4a4a;
  }

  width: calc((100% - 2px) / 3);
  padding: 10px 0;
  font-size: 24px;
`;
