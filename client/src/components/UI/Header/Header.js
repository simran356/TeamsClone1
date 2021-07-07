//importing the three icons at the right hand side
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{
    faQuestionCircle,
    faExclamationCircle,
    faCog,
} from "@fortawesome/free-solid-svg-icons";
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
           <div className="logo">
               <img src="https://tse4.mm.bing.net/th?id=OIP.kLBcPdEex8d7Rp7vMBZJgQHaHa&pid=Api&P=0&w=300&h=300" alt=""/>
               <span className="help-text">
                  <b> Microsoft Teams</b>
               </span>

            </div>
            <div classame="action-btn"> 
                <FontAwesomeIcon className="icon-block" icon={faQuestionCircle}/>
                <FontAwesomeIcon className="icon-block" icon={faExclamationCircle}/>
                <FontAwesomeIcon className="icon-block" icon={faCog}/>

            </div>
            
        </div>
    )
}
export default Header;
