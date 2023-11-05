export const Profile = { username, tag, location, avatar, stats } => {
return(

<ProfileCard>
  <Describtion>
    <Avatar src={avatar} alt="User avatar"/>
    <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
  </Describtion>
{/* 
  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul> */}
</ProfileCard>
)
};
