import { useState } from "react";

const Collapse = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element;
}): React.ReactElement => {
  const [show, toogle] = useState<boolean>(false);

  return (
    <>
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium gap-3"
          onClick={() => toogle(!show)}
        >
          <span>{title}</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div className={`${show ? "" : "hidden"} p-5`}>{children}</div>
    </>
  );
};

export default Collapse;
