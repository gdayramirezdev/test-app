import { ChangeEvent } from "react";

export type InputProps = {
  type: "text" | "number" | "email" | "password" | "search";
  id: string;
  placeholder: string;
  name?: string;
  className?: string;
  value?: string;
  disable?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  id,
  placeholder,
  className,
  onChange,
  value,
  name,
}: InputProps): React.ReactElement => {
  return (
    <input
      type={type}
      id={id}
      className={`m-2 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      name={name}
    />
  );
};

export default Input;
