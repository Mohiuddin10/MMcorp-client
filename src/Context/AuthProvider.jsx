import { createContext } from "react";
import { PropTypes } from "prop-types"


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
    children: PropTypes.node,
}