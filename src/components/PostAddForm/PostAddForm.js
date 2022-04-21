import "./PostAddForm.css";

const PostAddForm = ({ onAdd }) => {
  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="what are you thinking about!"
        className="form-control new-post-label"
      />
      <button
        type="submit"
        className="btn btn-outline-secondary"
        onClick={() => {
          onAdd("hello worlds");
        }}
      >
        Add Post
      </button>
    </div>
  );
};

export default PostAddForm;
