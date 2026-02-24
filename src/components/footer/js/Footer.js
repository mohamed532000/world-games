import "../css/footer.css";
import 'swiper/css';
import 'swiper/css/navigation';
import wLogo from "../../../media/images/w-logo.png"
import ShareLine from "../../share-line/Share-line";

function Footer() {

    return (
        <>
        
            <footer>
                <ShareLine/>
                <div className="container footer-container">

                    <div className="footer-box subscribe-div">
                        <h2 className="footer-box-title"> <img src={wLogo} alt=""/> ORLD</h2>
                        <form className="subscribe-form">
                            <div className="input-div">
                                <input type="text" placeholder="Enter Your Email"/>
                            </div>
                            <div className="submit-div">
                                <i className="fa-solid fa-arrow-right"></i>
                                <input type="submit" value={"Subscribe"}/>
                            </div>
                        </form>
                        <p>The world without photography will be meaningless to us.</p>
                    </div>

                    <div className="footer-box adress-div">
                        <h2 className="footer-box-title">Adress</h2>
                        <h5>Baker Street 223b London, CA 70413</h5>
                        <p>Open: 9:30 AM 5:30PM</p>
                        <h5>Phone: +1 (800) 456 37 11</h5>
                        <h5>Email: support@promo-theme.com</h5>
                        <div className="sochial-media-div">
                            <a href="/" aria-label="Icon"><i className="fa-brands fa-instagram"></i></a>
                            <a href="/" aria-label="Icon"><i className="fa-brands fa-facebook"></i></a>
                            <a href="/" aria-label="Icon"><i className="fa-brands fa-twitter"></i></a>
                        </div>
                    </div>


                    <div className="footer-box recent-posts-div">
                        <h2 className="footer-box-title">Recent Posts</h2>
                        <h5><a href="/">Kills you slowly</a></h5>
                        <p>November 8, 2019</p>
                        <h5><a href="/">Clout</a></h5>
                        <p>April 22, 2019</p>
                        <h5><a href="/">Jerome</a></h5>
                        <p>April 22, 2019</p>
                    </div>

                    <div className="footer-box recent-comments-div">
                        <h2 className="footer-box-title">Recent Comments</h2>
                        <h5>Elena Cobsky - <a href="/">Driving Engagement Online</a></h5>
                        <h5>John Michel - <a href="/">Designing for the web in 2019</a></h5>
                        <h5>Anton Stockman - <a href="/">Streamlining the path to conversion</a></h5>
                    </div>

                </div>
                <div className="container reserved-div">
                    <h5 className="footer-links">
                        <p>© 2023, SOMO Theme by Promo Theme</p>

                        <a href="">Team</a> | <a href="">Privacy Policy</a> | <a href="">Sitemap</a> 
                    </h5>

                    <h5>All Rights Reserved.</h5>
                </div>
            </footer>

            

        </>
    )
}

export default Footer;