import { createContext } from "react";
import { PropType } from "prop-types"


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const authName = {
        name: "Mohammad Mohiuddin",
        age: 31,
        salary: "$13000"
    };

    return (
        <AuthContext.Provider value={authName}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropType.node,
}