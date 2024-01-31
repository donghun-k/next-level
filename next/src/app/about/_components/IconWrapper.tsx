import { ReactNode } from "react";

const IconWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-12 w-12 items-center justify-center duration-500 hover:scale-110">
      {children}
    </div>
  );
};

export default IconWrapper;
