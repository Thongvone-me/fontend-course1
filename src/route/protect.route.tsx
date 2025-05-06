import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth.context";
import { ReactNode, useEffect } from "react";

export const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate(); 
    const Location = useLocation().pathname;

    const {auth} = useAuth();

    useEffect(()=>{
        if(!auth || !auth.accessToken || !auth.username){
            navigate('/login'); 
        }
        if(auth && auth.accessToken && auth.username && Location === '/login'){
            navigate('/');
        }
    },[auth]);
   

    return children;
} 