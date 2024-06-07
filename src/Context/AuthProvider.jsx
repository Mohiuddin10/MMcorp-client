import { createContext } from "react";
import PropsType from "prop-types";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const authName = {
        name: "Mohammad Mehtab Uddin Araf"
    }
    return (
        <AuthContext.Provider value={authName}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropsType.node,
}