import { Link } from "react-router-dom";
import Header from './../UI/Header/Header';
import './NoMatch.scss';
const NoMatch = () => {
    return (
        <div className="no-match">
            <Header />
            <div className="invalid-content">
                <h2><center>Invalid video call name</center></h2>
                <div className="action-btn">
                    <center>
                        <Link className="btn blue" to="/">
                            Return to home screen
                </Link>
                    </center>

                </div>

            </div>
        </div>
    ) 
}
export default NoMatch;
