import { memo } from "react";

export const Profiletab = memo(({ id, activeTab, children }) => {
  return activeTab === id ? <>{children}</> : null;
});
