import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

// Have to add props to the function
// const Like = (props) => {
// And add react icons to the project
interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    // Whatever status is, set it to the opposite
    setStatus(!status);

    // Call the onClick function
    onClick();
  };

  if (status) return <AiFillHeart color="#ff6b81" size={40} onClick={toggle} />;
  return <AiOutlineHeart size={40} onClick={toggle} />;
};

export default Like;
