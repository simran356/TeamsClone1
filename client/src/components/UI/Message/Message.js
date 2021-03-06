import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes,
    faUserFriends,
    faCommentAlt,
    faPaperPlane,

}
    from "@fortawesome/free-solid-svg-icons";
import './Message.scss';
import { formatDate } from './../../../utils/helpers';
const Message = ({ setIsMessenger, sendMsg, messageList }) => {
    const [msg, setMsg] = useState("");

    const handleChangeMsg = (e) => {
        setMsg(e.target.value);
    };

    //on pressing enter from the keyboard , we can send the message

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMsg(msg);
            setMsg("");
        }
    };
    const handleSendMsg = () => {
        sendMsg(msg);
        setMsg("");
    };

    //setting up the message container
    return (

        <div className="message-container">
            <div className="message-header">
                <h3> Meeting Details </h3>
                <FontAwesomeIcon className="icon" icon={faTimes} onClick={() => {
                    setIsMessenger(false);
                }}
                />
            </div>
            <div className="message-header-tabs">
                <div className="tab">
                    <FontAwesomeIcon className="icon" icon={faUserFriends} />
                    <p> Participants (1) </p>
                </div>
                <div className="tab active">
                    <FontAwesomeIcon className="icon" icon={faCommentAlt} />
                    <p> Chat </p>
                </div>

            </div>
            <div className="chat-section">
                {messageList.map((item) => (
                    <div key={item.time} className="chat-block">
                        <div className="sender">
                            {item.user} <small> {formatDate(item.time)} </small>

                        </div>
                        <p className="msg"> {item.msg}</p>
                    </div>
                ))}

            </div>
            <div className="send-msg-section">
                <input
                    placeholder="Type your message here"
                    value={msg}
                    onChange={(e) => handleChangeMsg(e)}
                    onKeyDown={(e) => handleKeyDown(e)}
                />
                <FontAwesomeIcon
                    className="icon"
                    icon={faPaperPlane}
                    onClick={handleSendMsg}
                />
            </div>
        </div>
    );
};
export default Message;
