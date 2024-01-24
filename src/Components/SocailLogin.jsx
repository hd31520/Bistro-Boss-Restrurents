import { FcGoogle } from "react-icons/fc";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocailLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()

    const handleGooleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })

        })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className='flex justify-center mb-10'>
                <button onClick={handleGooleSignIn} className="btn glass text-xl"><FcGoogle /> GOOGLE</button>
            </div>
        </div>
    );
};

export default SocailLogin;