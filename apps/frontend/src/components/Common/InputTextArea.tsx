import React, { FC } from "react";
import TextareaAutosize from "react-textarea-autosize";

interface Iprops {
  error?: string;
  touched?: boolean | string;
  validation?: boolean;
  value?: string;
  name?: string
}

const InputField: FC<Iprops> = ({ ...props }: Iprops) => {
  const { name, touched, error, validation, value, ...rest } = { ...props };

  return (
    <>
      <TextareaAutosize
        id={name}
        value={value}
        minRows={3}
        maxRows={5}
        className={`resize-y  w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none  focus:border-indigo-500 sm:text-sm ${(error && touched) || (validation && error)
          ? " border-red-300"
          : " border-gray-300"
          }`}
        {...rest}
      />
      {((error && touched) || (validation && error)) && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <svg
            className="h-4 w-4 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default InputField;
