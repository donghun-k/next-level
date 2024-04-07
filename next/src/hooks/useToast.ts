import { useState } from 'react';

const useToast = () => {
  const [toastInfo, setToastInfo] = useState<{
    show: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    show: false,
    message: '',
    type: 'success',
  });

  const closeToast = () => {
    setToastInfo({
      show: false,
      message: '',
      type: 'success',
    });
  };

  return {
    toastInfo,
    setToastInfo,
    closeToast,
  };
};

export default useToast;
