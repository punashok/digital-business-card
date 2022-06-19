import profilePic from "../images/ashokpun.jpg"

export default function Photo() {
    return (
        <div className="profile-pic">
            <img src={profilePic} alt="Ashok Pun" />
        </div>
    )
}