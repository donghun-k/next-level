import { useFormStatus } from "react-dom";
import { PulseLoader } from "react-spinners";

const SendingMailBackdrop = () => {
  const { pending } = useFormStatus();
  if (!pending) return null;
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center bg-gray-900/20">
      <PulseLoader
        color="#555"
        size={25}
        speedMultiplier={0.5}
        cssOverride={{
          gap: "30px",
        }}
      />
    </div>
  );
};

export default SendingMailBackdrop;
