import { useNavigate } from "react-router";
import { useAppContext } from "../Context/ContextProvider"


export default function ToogleBar({ setCard }) {
    const { userDetails, setUserDetails } = useAppContext();
    const navigate = useNavigate();
    function logout() {
        setUserDetails('');
        navigate('/')
    }

    return <div className="profileCard">
        <div className="card1">{userDetails.user.contact}</div>
        <div className="card1">{userDetails.user.email}</div>
       
        <div className="card1"
            onClick={() => {
                logout()
            }}
        >LogOut</div>

    </div>
}
