import React from "react";

export const Profiletab = ({ id, activeTab, children }) => {
  return activeTab === id ? <>{children}</> : null;
};
