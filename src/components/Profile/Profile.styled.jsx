import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  background-color: #d9e7b5;
  width: 360px;
  max-width: 100%;
  border-radius: 20px 20px 0 0;
  box-shadow: 5px 5px 8px 2px rgba(0, 0, 0, 0.3);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

export const Avatar = styled.img`
  width: 240px;
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
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #a8d3ee;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
`;
