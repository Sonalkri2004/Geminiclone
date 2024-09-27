import { createContext, useEffect } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  
    // Define the onSent function to send prompts to the Gemini API
    const onSent = async (prompt) => {
       
            await run(prompt);
       
    };
    onSent("what is nextjs");
    // Empty dependency array ensures this runs only once when the component mounts

    const contextValue = {};

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
