import { AiOutlineHeart } from "react-icons/ai";
import { FcLike } from "react-icons/fc";

// Have to add props to the function
// const Like = (props) => {
// And add react icons to the project
interface Props {
  showLike: boolean;
  onClick: () => void;
}

const Like = ({ showLike, onClick }: Props) => {
  return (
    <div onClick={onClick}>
      {showLike ? <FcLike size={40} /> : <AiOutlineHeart size={40} />}
    </div>
  );
};

export default Like;
