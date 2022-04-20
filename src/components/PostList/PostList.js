import "./PostList.css";
import PostListItem from "../PostListItem";

const PostList = () => {
  return (
    <ul className="app-list list-group">
      <PostListItem label="Going to learn React JS" important />
      <PostListItem label="That is so good" />
      <PostListItem label="i need a beak..." />
    </ul>
  );
};

export default PostList;
