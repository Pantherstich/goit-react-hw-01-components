import { Status, FriendCard, UserName, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendCard>
      <Status $status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="96" />
      <UserName>{name}</UserName>
    </FriendCard>
  );
};
