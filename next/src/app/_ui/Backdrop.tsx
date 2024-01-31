import React, { ReactNode } from "react";

import Portal from "./Portal";

const Backdrop = ({ children }: { children: ReactNode }) => {
  return (
    <Portal portalId="backdrop-portal">
      <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-gray-900/20">
        {children}
      </div>
    </Portal>
  );
};

export default Backdrop;
