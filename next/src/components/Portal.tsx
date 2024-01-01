import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  portalId: string;
  children: ReactNode;
}

const Portal = ({ portalId, children }: Props) => {
  if (typeof window === "undefined") return null;

  const portal = document.getElementById(portalId);

  if (!portal) return null;

  return createPortal(children, portal);
};

export default Portal;
