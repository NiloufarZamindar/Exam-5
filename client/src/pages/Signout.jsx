import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toast } from './../utils/Toast';

const Signout = () => {
    const navigate = useNavigate();
    localStorage.removeItem("login");
    useEffect(()=>{
        Toast('Sign Out Successfuly!');
        navigate('/login');
    },[navigate]);
}

export default Signout;
