"use client";

import { useFormStatus } from "react-dom";
import { IoIosMail } from "react-icons/io";

import Backdrop from "../../_components/Backdrop";

const MailSendingProgress = () => {
  const { pending } = useFormStatus();
  if (!pending) return null;
  return (
    <Backdrop>
      <IoIosMail className="progress text-white" size={100} />
    </Backdrop>
  );
};

export default MailSendingProgress;
