import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user)
  if (!user) {
    return <div>로그인이 필요합니다.</div>;
  }
  
  return (
    <div>
      <h1>{user.user_name}님, 환영합니다!</h1>
      <p>아이디: {user.user_id}</p>
      <p>레벨: {user.user_lv}</p>
      <p>포인트: {user.point}</p>
    </div>
  );
};

export default UserProfile;
