import { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children, maxLength = 100 }: Props) => {
  if (children.length <= maxLength) return <p>{children}</p>;

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const child = expanded ? children : children.substring(0, maxLength);

  return (
    <div>
      {child}...
      <button onClick={handleClick}>{expanded ? "Less" : "More"}</button>
    </div>
  );
};

export default ExpandableText;
