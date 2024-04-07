'use client';
import { LuEraser } from 'react-icons/lu';

import Backdrop from '@/app/_components/Backdrop';

const CommentDeletingProgress = () => {
  return (
    <Backdrop>
      <LuEraser className="progress z-50 text-white" size={100} />
    </Backdrop>
  );
};

export default CommentDeletingProgress;
