import styled from 'styled-components';

export const Status = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ $status }) => ($status ? 'green' : 'red')};
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 320px;
  padding: 8px 36px;
  border-radius: 4px;
`;

export const UserName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;
