import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #cff2b5;
  width: 300px;
  border-radius: 20px;
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
  flex-direction: row;
  gap: 12px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b1cf9a;
  width: 84px;
  border-radius: 8px;
`;
