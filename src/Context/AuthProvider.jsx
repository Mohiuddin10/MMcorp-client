import { createContext, useState } from "react";
import PropsType from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const authName = {
       createUser
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