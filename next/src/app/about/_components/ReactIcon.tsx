import React from 'react';
import { SiReact } from 'react-icons/si';

import IconWrapper from './IconWrapper';

const ReactIcon = () => {
  return (
    <IconWrapper>
      <SiReact className="h-9 w-9 drop-shadow-custom duration-500 hover:text-[#61dafb]" />
    </IconWrapper>
  );
};

export default ReactIcon;
