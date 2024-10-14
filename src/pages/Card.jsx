import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

const Card = (props) => {
  const tags = props.data.tags;
  return (
    <div className="item">
      <h3>{props.data.title}</h3>
      <p>{props.data.body}</p>
      {tags.map((tag) => (
        <a href="#" key={tag}>
          #{tag}
        </a>
      ))}
      <div className="icons">
        <AiOutlineLike /> {props.data.reactions.likes}
        <AiOutlineDislike />
        {props.data.reactions.dislikes}
      </div>
      <div className="view">
        <FaEye />
        {props.data.views} views
      </div>
      <p>posted by {props.data.userId}</p>
    </div>
  );
};
export default Card;
