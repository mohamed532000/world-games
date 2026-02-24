import WinnerBox from "../../winner-and-loser-cards/winner-box/js/WinnerBox";
import LoserBox from "../../winner-and-loser-cards/loser-box/js/LoserBox";
import "../css/wide-box.css";

function WideBox(props){
    let {match , onImg} = props;
    return (
        <>
            <div className={`wide-box ${props.wideBoxClass}`} id={props.id}>
                {/* if there is a variable called match wil return to divs to winner and liser*/}
                {match &&
                <div className="winner-and-loser-boxes">
                    <WinnerBox winnerImg={props.winnerImg} winnerName={props.winnerName} winnerScore={props.winnerScore}
                    winnerClassName={props.winnerClassName}/>
                    <h3>VS</h3>
                    <LoserBox loserImg={props.loserImg} loserName={props.loserName} loserScore={props.loserScore} loserClassName={props.loserClassName}/>
                    <div className="name-of-match">
                        <h2>{props.matchName}</h2>
                        <h4 className="match-date">{props.matchDate}</h4>
                    </div>
                </div>
                }

                {onImg &&
                <>
                    <div className="moment-img-and-info">
                        <div className="one-img"><img src={props.momentImg} alt=""/></div>
                
                        <div className="name-of-match">
                            <h2>{props.matchName}</h2>
                            <h4 className="match-date">{props.matchDate}</h4>
                        </div>
                    </div>
                </>
                }

                <a className="watch-match-link" href="/">
                    <i className="fa-brands fa-twitch"></i>
                    <h4 className="watch-stream">twitch stream</h4>
                </a>
            </div>
        
        </>
    )
}

export default WideBox;