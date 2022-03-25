import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
        // 배열 렌더링에서 고유한 key값은 필수!
      ))}
    </div>
  );
}

export default UserList;
