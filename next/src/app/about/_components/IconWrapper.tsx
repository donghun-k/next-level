import { ReactNode } from 'react';

const IconWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="[&_svg]:drop-shadow-custom flex size-12 items-center justify-center duration-500 hover:scale-110 [&_svg]:duration-500">
      {children}
    </div>
  );
};

export default IconWrapper;
