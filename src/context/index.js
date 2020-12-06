import React from "react";
import { defaultContext } from "./config";

export const AppContext = React.createContext(defaultContext.config);
export { defaultContext };
