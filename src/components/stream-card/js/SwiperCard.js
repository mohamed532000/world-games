import "../css/stream-card.css";
function StreamCard(props) {
    return (
        <>
            <div className="stream-box">
                <div className="img-and-title">
                    <img src={props.img} alt=""/>
                    <h2 className="stream-title">{props.title}</h2>
                </div>
                <div className="stream-info">
                    <div className="groups-and-prize">
                        <div className="groups-and-player">
                            <h3>{props.groubsCount} Groups</h3>
                            <h4>{props.playersCount} Players</h4>
                        </div>
                        <div className="prize-pool">
                            <h3>{props.prize}</h3>
                            <h4>{props.prizeCount}</h4>
                        </div>
                    </div>
                    <div className="stream-date">
                        <h4>{props.streamDate}</h4>
                    </div>
                </div>
                <a href="#" aria-label="Anchor"></a>
            </div>
        </>
    )
}
export default StreamCard;