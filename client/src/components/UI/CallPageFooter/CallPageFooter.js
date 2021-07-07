import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faVideo,
    faPhone,
    faMicrophone,
    faDesktop,
    faAngleUp,
    faClosedCaptioning,
    faMicrophoneSlash,
    faVideoSlash,

} from "@fortawesome/free-solid-svg-icons";
import './CallPageFooter.scss';

const CallPageFooter = ({
    isPresenting,
    stopScreenShare,
    screenShare,
    isAudio,  
    toggleAudio,
    disconnectCall,
    isVideo,
    toggleVideo,
}) => {
    return (
        <div className="page-footer">
            <div className="left">
                <div className="icon-block">
                    Meeting details
                    <FontAwesomeIcon className="icon" icon={faAngleUp} />
                </div>
            </div>
            <div className="center">
                <div className={`icon-block ${!isVideo ? "red-bg" : null}`}
                onClick={() => toggleVideo (!isVideo)}
                >
                    <FontAwesomeIcon className="icon" 
                    icon={isVideo ? faVideo: faVideoSlash} />

                </div>

                <div className={`icon-block ${!isAudio ? "red-bg" : null}`}
                 onClick={() => toggleAudio(!isAudio)}
                >
                    <FontAwesomeIcon className="icon"
                     icon={isAudio ? faMicrophone : faMicrophoneSlash}
                      />

                </div>
                <div className="icon-block" onClick= {disconnectCall}>
                    <FontAwesomeIcon className="icon red" icon={faPhone} />
                </div>
            </div>

             
                <div className="right">
                <div className="icon-block">
                    <FontAwesomeIcon className="icon red" icon={faClosedCaptioning} />
                    <p className="title"> Turn on subtitles </p>
                </div>
                {isPresenting ? (
                    <div className="icon-block" onClick={stopScreenShare}>
                        <FontAwesomeIcon className="icon red" icon={faDesktop} />
                        <p className="title"> Stop screen sharing</p>
                    </div>

                ) : (
                    <div className="icon-block" onClick={screenShare}>
                        <FontAwesomeIcon className="icon red" icon={faDesktop} />
                        <p className="title"> Share screen </p>
                    </div>
                )}

            </div>
        </div>
        
   );
};

export default CallPageFooter;
