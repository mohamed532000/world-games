import "../css/about.css";
function PersonCard(props) {
    return (
        <div className="person-box">
            <div className="person-img">
                <img src={props.img} alt="" />
                <a className="show-profile" href={props.profileLink}><h3>Show Profile</h3></a>
            </div>
            <div className="person-info">
                <h2 className="person-name">{props.personName}</h2>
                <div className="person-sochial-media">
                    <a href="/" aria-label="Icon"><i className="fa-brands fa-instagram"></i></a>
                    <a href="/" aria-label="Icon"><i className="fa-brands fa-facebook"></i></a>
                    <a href="/" aria-label="Icon"><i className="fa-brands fa-twitter"></i></a>
                </div>
            </div>
        </div>  
    )
}

export default PersonCard;