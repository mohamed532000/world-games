import "../css/home.css";
import 'swiper/css';
import 'swiper/css/navigation';
import {Swiper , SwiperSlide} from "swiper/react";
import { Pagination , Navigation ,  } from "swiper";
import { useEffect } from "react";
import Ul from "../../../components/ul-list/js/Ul";
import WideBox from "../../../components/wide-box/js/WideBox";
import ReadMoreBtn from "../../../components/read-more-btn/Read-more-btn";
import SupportCard from "../../../components/support-card/js/SupportCard";
import StreamCardsSwiper from "../../../components/swiper-line/js/SwiperLine";
import CounterBox from "../../../components/counter-box/js/CounterBox";
import video2 from "../../../media/videos/stream-1.mp4";
import team1 from "../../../media/images/game-team-logo1-100x100@2x.png";
import team2 from "../../../media/images/game-team-logo2-100x100@2x.png";
import team3 from "../../../media/images/game-team-logo3-100x100@2x.png";
import team4 from "../../../media/images/game-team-logo4-100x100@2x.png";
import team5 from "../../../media/images/game-team-logo5-100x100@2x.png";
import team6 from "../../../media/images/game-team-logo6-100x100@2x.png";

function Home() {

    useEffect(() => {

        let list = document.querySelectorAll("ul.ulForHome li");

        let allMatchesBoxes = document.querySelectorAll(".wide-box");

        list.forEach(li=>{

            li.onclick = () =>{
                let activeBoxMatch = document.querySelectorAll(`.${li.textContent}`)
                list.forEach(li =>{

                    li.classList.remove("active");

                });

                li.classList.add("active");

                allMatchesBoxes.forEach(matchBox => {
                    matchBox.classList.remove("active")
                });

                activeBoxMatch.forEach(activeBox => {
                    activeBox.classList.add("active")
                });

            }
        });
    }, []);

    return (
        <>
            <section className="home-section">
                <div className="head-of-home">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        modules={[Navigation , Pagination ]}
                        navigation
                        pagination = {{clickable : true}}

                    >
                        <SwiperSlide>
                            <div className="slide first-slide">
                                <img src="https://images.pexels.com/photos/7862508/pexels-photo-7862508.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img"/>
                                <div className="container">
                                    <div className="home-text">
                                        <h2 className="text-title">Games With idea & memorable design</h2>
                                        <button><h3>Watch Now</h3></button>
                                        <div className="social-media">
                                            <a href="#" aria-label="Icon"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#" aria-label="Icon"><i className="fa-brands fa-facebook"></i></a>
                                            <a href="#" aria-label="Icon"><i className="fa-brands fa-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide second-slide">
                                <img src="https://images.pexels.com/photos/7915379/pexels-photo-7915379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
                                <div className="container">
                                    <div className="home-text">
                                        <h2 className="text-title">The New Game & awesome concept.</h2>
                                        <button><h3>Watch Now</h3></button>
                                        <div className="social-media">
                                            <a href="#" aria-label="Icon"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#" aria-label="Icon"><i className="fa-brands fa-facebook"></i></a>
                                            <a href="#" aria-label="Icon"><i className="fa-brands fa-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="slide last-slide">
                                <img src="https://images.pexels.com/photos/1111597/pexels-photo-1111597.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" /> 
                                <div className="container">
                                    <div className="home-text">
                                        <h2 className="text-title">Play with us in the all new games.</h2>
                                        <button><h3>Watch Now</h3></button>
                                        <div className="social-media">
                                            <a href="#" aria-label="Icon"><i className="fa-brands fa-instagram"></i></a>
                                            <a href="#" aria-label="Icon"><i className="fa-brands fa-facebook"></i></a>
                                            <a href="#" aria-label="Icon"><i className="fa-brands fa-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="container boxes-container">
                    <SupportCard className="normal-box-home" icon={<i className="fa-solid fa-headset"></i>} title="Twitch Streaming" info="New streams every day from our best players"/>
                    <SupportCard className="normal-box-home" icon={<i className="fa-solid fa-gamepad"></i>} title="eSports News" info="Get top streams and results from world Cyber Games"/>
                    <SupportCard className="normal-box-home" icon={<i className="fa-solid fa-award"></i>} title="Game Tournaments" info="Create your own games tournaments and share results"/>
                </div>
                <div className="container text-and-video-container">
                    <div className="game-theme">
                        <h2>Game theme for each direction and more.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                        <ReadMoreBtn path="#"/>
                    </div>
                    <video src={video2} controls  className="stream-video-1"/>
                </div>
                <StreamCardsSwiper/>
                <div className="container matches-boxes-container">
                    <div className="title-of-matches">
                        <h2>Latest matches</h2>
                        <Ul ulClassName="ulForHome" li1="All" li2="CS-GO" li3="DOTA-2" li4="FORTNITE" li5="PUBG" li6="FIFA"/>
                    </div>
                
                    <WideBox wideBoxClass="All CS-GO active" matchName={"ESPORT LEAGUE - CS GO DIVISION"} matchDate={"DECEMBER 21,2020 03:12PM"} winnerImg={team1} winnerName="JACK" winnerScore={120} loserImg={team2} loserName="BISHO" loserScore={100} match = {true}/>
                
                    <WideBox wideBoxClass="All DOTA-2 active" matchName={"ESPORT LEAGUE - DOTA 2"} matchDate={"OCTOBER 22,2021 03:12AM"} winnerImg={team2} winnerName="NAVI" winnerScore={110} loserImg={team3} loserName="GDEV" loserScore={70} match = {true}/>
                
                    <WideBox wideBoxClass="All PUBG active" matchName={"ESPORT LEAGUE - PUBG"} matchDate={"NOVEMBER 28,2022 02:12PM"} winnerImg={team4} winnerName="CLIKALV" winnerScore={188} loserImg={team5} loserName="GDV" loserScore={170} match = {true}/>
                
                    <WideBox wideBoxClass="All FORTNITE active" matchName={"ESPORT LEAGUE - FORTNITE"} matchDate={"MARCH 13,2021 07:12PM"} winnerImg={team2} winnerName="GRUV" winnerScore={140} loserImg={team1} loserName="CLOIN" loserScore={137} match = {true}/>
                
                    <WideBox wideBoxClass="All PUBG active" matchName={"ESPORT LEAGUE - PUBG"} matchDate={"NOVEMBER 29,2022 02:12PM"} winnerImg={team2} winnerName="CLIKALV" winnerScore={128} loserImg={team5} loserName="GDV" loserScore={100} match = {true}/>
                
                    <WideBox wideBoxClass="All FIFA active" matchName={"ESPORT LEAGUE - FIFA"} matchDate={"OCTOBER 13,2021 09:12PM"} winnerImg={team3} winnerName="GRUV" winnerScore={100} loserImg={team6} loserName="CLOIN" loserScore={95} match = {true}/>
                
                    <ReadMoreBtn path="#"/>
                </div>
                <div className="container boxes-container">
                    <CounterBox icon={<i className="fa-brands fa-twitch"></i>} title={`${1300}+`} info="TWITCH STREAMS"/>
                    <CounterBox icon={<i className="fa-brands fa-youtube"></i>} title={`${1050}+`} info="YOUTUBE STREAMS"/>
                    <CounterBox icon={<i className="fa-brands fa-playstation"></i>} title={`${850}+`} info="PAST GAMES"/>
                    <CounterBox icon={<i className="fa-solid fa-people-group"></i>} title={`${350}+`} info="PRO TEAMS"/>
                </div>
            </section>
        </>
    )
}

export default Home;