import { ReactNode, useState } from "react";
import { claim } from "./auth.models";
import AuthenticationContext from "./AuthenticationContext";

const AuthContextProvider = (props: authContextProviderProps) => {
    const [claims, setClaims] = useState<claim[]>([
        {name: "email", value: 'jlw230604@gmail.com'},
        {name: "role", value: 'user'},
    ]);

    return <AuthenticationContext.Provider
        value={{ claims: claims, update: setClaims }}>{props.children}</AuthenticationContext.Provider>
};

interface authContextProviderProps{
    children: ReactNode
} 

export default AuthContextProvider;