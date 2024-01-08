"use client";

import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { IoClose } from "react-icons/io5";

import Portal from "../Portal";

interface Props {
  message: string;
  type: "success" | "error";
  closeToast: () => void;
  duration?: number;
}

const Toast = ({ message, type, closeToast, duration = 5000 }: Props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [closeToast, duration]);
  return (
    <Portal portalId="toast-portal">
      <div className="toast-pop fixed bottom-8 left-0 z-50 flex h-[60px] w-full items-center justify-center">
        <div className="flex h-[60px] w-[400px] items-center justify-between rounded-md bg-gray-50 px-4 shadow-md">
          {type === "success" ? (
            <FaCheckCircle className="h-7 w-7 text-gray-700" />
          ) : (
            <MdError className="h-7 w-7 text-gray-700" />
          )}
          <p className="pointer-events-none flex w-[300px] items-center justify-center font-extrabold text-gray-700">
            {message}
          </p>
          <button
            className="focus:outline-none"
            onClick={closeToast}
            aria-label="Close toast"
          >
            <IoClose className="h-7 w-7 text-gray-700" />
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default Toast;
