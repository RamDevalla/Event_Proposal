import { useNavigate } from "react-router";
import { useAppContext } from "../contexts/ContextProvider"
import { useState } from "react"


export default function ProfileCard({ setCard }) {
    const { userDetails, setUserDetails } = useAppContext();
    const navigate = useNavigate();
    const [uploadProfile, setUploadProfile] = useState('');
    function logout() {
        setUserDetails('');
        navigate('/')
    }

    return <div className="profileCard">
        <div className="card1">{userDetails.user.contact}</div>
        <div className="card1">{userDetails.user.email}</div>
        <div className="card1"
            onClick={() => {
                setUploadProfile(true)
            }}
        >Change Profile Pic</div>
        <div className="card1"
            onClick={() => {
                logout()
            }}
        >LogOut</div>

    </div>
}
