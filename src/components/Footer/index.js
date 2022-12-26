import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="primary-footer padding-block-700 bg-neutral-900 text-neutral-100">
            
            <div className="container">

                <div className="even-columns">

                
                    <div  className="primary-footer-logos">

                        <h3>RAIMO HAIKARI</h3>

                        <ul className="social-list" role="list">

                            <li>
                                <a href="https://www.instagram.com/raimohaikari/" target="_blank">
                                    <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a  href="https://github.com/RaimoHaikari" target="_blank">
                                    <FontAwesomeIcon className="social-icon" icon={faGithub} />
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="copy-right-container">
                        <p>Copyright 2022. All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;