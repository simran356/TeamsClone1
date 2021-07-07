import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faCopy,
    faUser,
    faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
import './MeetingInfo.scss';
const MeetingInfo = ({ setMeetInfoPopup, url }) => {
    return (
        <div className="meeting-information">
            <div className="meeting-header">
                <h3> Invite people to join you</h3>
                <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => {
                    setMeetInfoPopup(false);
                }} />

            </div>
            <button className="add-participant-btn">
                <FontAwesomeIcon className="icon" icon={faUser} />
                 Add Participants
             </button>
            <p className="info-text">
                Share meeting invite
             </p>
            <div className="meet-link">
                <span>{url}</span>
                <FontAwesomeIcon className="icon" icon={faCopy} onClick={() => navigator.clipboard.writeText(url)} />
                
            </div>
            <div className="permit">
                <FontAwesomeIcon className="icon" icon={faShieldAlt} />
                <p className="small-text">
                    Permission needs to be granted by host for others to join
             </p>
            </div>
            <p className="small-text">
                Joined as simran@gmail.com
             </p>
        </div>
    );
};
export default MeetingInfo;
