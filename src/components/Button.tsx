import { MouseEventHandler } from "react";

export type InputProps = {
  title: string;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  //another props
};

const Button = ({
  title,
  onClick,
  className,
}: InputProps): React.ReactElement => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`m-2 text-white bg-blue-700 font-medium rounded-lg text-sm px-4 py-2 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
