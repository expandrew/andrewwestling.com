import React from "react";

export const Message = (props: React.PropsWithChildren) => {
  return (
    <div
      {...props}
      className="p-4 border-l-4 border-l-solid border-primary rounded-md bg-highlight dark:bg-highlight-dark"
    />
  );
};
