import React from "react";
import { ValueProvider } from "../../contexts";
import { Router } from "../Router";

export const App: React.FC = () => {

  return (
    <ValueProvider>
      <Router/>
    </ValueProvider>
  );
};