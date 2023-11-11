import styled from 'styled-components';

export const Status = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50% 80% 50% 80%;
  background-color: ${({ $status }) => ($status ? 'green' : 'red')};
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 18px 36px;
  background-color: #fffff4;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`;

export const UserName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;
export const Avatar = styled.img`
  border-radius: 8px;
  box-shadow: -1px -1px 2px #000000, 1px 1px 2px #000000;
`;
