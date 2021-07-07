import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import shortid from "shortid";
import Header from './../UI/Header/Header';
import './HomePage.scss';
const HomePage = () => {
     const history = useHistory();

    const startCall = () =>{
        //we will have to generate a unique id for the call
        const uid = shortid.generate();
        //redirect it to the call page
        history.push(`/${uid}#init`);
    };  
    return (
        <div className="home-page">
            <Header />
            <div className=" body">
                <div className="left-side">
                    <div className="content">
                        <h2><b> Stay up to date with all your meetings and chats updates.</b></h2>
                        <p><strong>Start your meeting now</strong>  </p>


                        <div className="action-btn"> 
                            <button className=" btn blue" onClick={startCall}>
                                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                                 New Meeting
                            </button>
                            <div className="input-block">
                                <div className="input-section">
                                    <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                                    <input placeholder="Enter a code or link" />
                                    
                                </div>
                                <button className="btn no-bg">Join</button>
                            </div>
                        </div>
                    </div>


                    <div className="help-text">
                        <a href="https://www.microsoft.com/en-in/microsoft-teams/group-chat-software "> Learn more</a> about Microsoft Teams
            </div>
                </div>
                <div className="right-side">
                    <div className="content">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWEMVm?ver=20ff&q=90&m=2&h=768&w=1024&b=%23FFFFFFFF&aim=true" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;

