import { useNavigate } from "react-router";
import { useAppContext } from "../contexts/ContextProvider"


export default function ProfileCard({ setCard }) {
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
