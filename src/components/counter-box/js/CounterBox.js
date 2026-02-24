// import "../style files/globaly-style.css";
import "../css/counter-box.css";
function CounterBox(props) {
    return (
        <>
            <div className={`counter-box`}>
                <img src={props.img} alt=""/>
                <a href="#" className="to-this-location" aria-label="Open link"></a>
                <div className="icon">{props.icon}</div>
                <h3 className="box-title">{props.title}</h3>
                <p className="box-info">{props.info}</p>
            </div>
        </>
    )
}

export default CounterBox;