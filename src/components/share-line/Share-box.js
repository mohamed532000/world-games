import "./share.css"
function ShareBox(props) {
    return (
        <>
            <div className={`share-box`}>
                <img src={props.img} alt=""/>
                <a href="/" className="to-this-location" aria-label="Anchor"></a>
                <div className="icon">{props.icon}</div>
                <h3 className="box-title">{props.title}</h3>
                <p className="box-info">{props.info}</p>
            </div>
        </>
    )
}

export default ShareBox;