"use client";

import { useFormStatus } from "react-dom";
import { PulseLoader } from "react-spinners";

import Backdrop from "../ui/Backdrop";

const MailSendingProgress = () => {
  const { pending } = useFormStatus();
  if (!pending) return null;
  return (
    <Backdrop>
      <PulseLoader
        color="#374151"
        size={25}
        speedMultiplier={0.5}
        cssOverride={{
          gap: "30px",
        }}
      />
    </Backdrop>
  );
};

export default MailSendingProgress;
