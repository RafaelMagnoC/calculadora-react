import React from "react";
import { createRoot } from 'react-dom/client';



import Calculadora from "./App";

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Calculadora />);