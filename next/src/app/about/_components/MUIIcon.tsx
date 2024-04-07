import React from 'react';
import { SiMui } from 'react-icons/si';

import IconWrapper from './IconWrapper';

const MUIIcon = () => {
  return (
    <IconWrapper>
      <SiMui className="h-8 w-8 drop-shadow-custom duration-500 hover:text-[#007fff]" />
    </IconWrapper>
  );
};

export default MUIIcon;
