import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        {friends.map((friends) => (
          <FriendListItem
            key={friends.id}
            avatar={friends.avatar}
            name={friends.name}
            isOnline={friends.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
