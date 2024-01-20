import { useContext } from "react";
import { AuthContext } from "../Provider/AUthProvider";

const useAuth = () => {
   
    const auth = useContext(AuthContext);
    return auth;
};

export default useAuth;