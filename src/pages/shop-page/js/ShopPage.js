import "../css/shop-page.css";
import shopImg from "../../../media/images/dark-shoping.jpeg";
import { Link } from "react-router-dom";
import HeadingOfSections from "../../../components/head-of-section/js/Head-of-section";
import Ul from "../../../components/ul-list/js/Ul";
import { useEffect , useState} from "react";
import { useSelector , useDispatch } from "react-redux";
import { fetchingDataFromApi } from "../../../project-state-and-actions/GamesReducer";
import vrIMG from "../../../media/images/918766.png";
import VrProducts from "../vr-products/js/VRProducts";

function ShopPage() {
    let myState = useSelector((state) => state);
    let dispatch = useDispatch();
    let [userEmail , setUserEmail] = useState("")

    useEffect(()=>{

        if(window.localStorage.getItem("hiddenClass")) {

            document.querySelector(".shop-section .container.heading-container").classList.add(window.localStorage.getItem("hiddenClass"));

            document.querySelector(".shop-section .container.heading-container").classList.add("none");

        }

        let listOfVRProducts = document.querySelectorAll("ul.ulForShopVr li");

        listOfVRProducts.forEach(li => {
            
            let liTextContent = li.textContent.split("").filter(letter => {
                return letter !== " "
            }).join("")

            let allVRPorducts = document.querySelectorAll(".vr-boxes-container .VR-card")
            
            

            li.onclick = () => {
                console.log(document.querySelectorAll(`.VR-card.${liTextContent}`))
                let activeProducts = document.querySelectorAll(`.VR-card.${liTextContent}`);

                listOfVRProducts.forEach(li => {

                    li.classList.remove("active");

                });

                li.classList.add("active");
                allVRPorducts.forEach(VRProducts => {
                    VRProducts.classList.remove("active")
                });
                activeProducts.forEach(activeProduct => {
                    activeProduct.classList.add("active");
                });;
            }
        });

        dispatch(fetchingDataFromApi());

    },[dispatch]);

    // all divs of games cards
    let allGames = myState.GamesReducer.map(game =>{
        
        return (
            <div className="game-box" key={game.title}>
                <div className="game-img">
                    <img src={game.thumbnail} alt="game img" />
                    <div className="cover">
                        <a href={game.game_url} title="Play Game" aria-label="Icon"><i className="fa-solid fa-gamepad"></i></a>
                        <i className="fa-solid fa-heart love" onMouseOver={()=>{
                            document.querySelectorAll(".love").forEach(icon => icon.onclick = () => icon.classList.toggle("active"))
                        }}></i>
                        <i className="fa-solid fa-magnifying-glass search-icon" onMouseOver={()=>{
                            document.querySelectorAll(".search-icon").forEach(icon => icon.onclick = () => document.querySelector(".search-div").classList.add("active"))
                        }}></i>
                    </div>
                </div>
                <div className="game-info">
                    <h2 className="game-name">{game.title}</h2>
                    <p className="game-description">{game.short_description}</p>
                </div>
            </div>
        )
    });

    return (
        <>
            <section className="shop-section">
                <div className="parent-of-welcome-popub sign-up-popub">
                        <div className="welcome-popub">
                            <i className="fa-solid fa-circle-check"></i>
                            <h2>welcome to family</h2>
                            <p>Thank you for choosing us, and we look forward to providing you with exceptional service.</p>
                            <div className="info-pobub">
                                <div className="info-div">
                                    <i className="fa-solid fa-bookmark"></i>
                                    <h3>start journy with your profile </h3>
                                </div>
                                <div className="info-div">
                                <i className="fa-solid fa-gears"></i>
                                    <h3>configure your payment settings </h3>
                                </div>
                                <div className="info-div">
                                <i className="fa-solid fa-user"></i>
                                    <h3>complete your profile setup </h3>
                                </div>
                            </div>
                            <button className="exploring-btn" onClick={()=>{
                                setTimeout(()=>{
                                    document.querySelector(".shop-section .parent-of-welcome-popub").classList.remove("active")
                                },300)
                                document.querySelector(".shop-section .parent-of-welcome-popub.sign-up-popub").classList.add("hidden-animate-class");
                                document.querySelector(".parent-of-welcome-popub.sign-up-popub .welcome-popub").classList.add("hidden")
                            }}>Start Exploring</button>
                        </div>
                </div>
                <div className="parent-of-welcome-popub sign-in-popub">
                    <div className="welcome-popub">
                        <i className="fa-solid fa-circle-check"></i>
                        <h2>We're glad to see you back!</h2>
                        <p>Feel free to browse our latest products and let us know if you need any assistance.</p>

                        <button className="exploring-btn" onClick={()=>{

                            setTimeout(()=>{
                                document.querySelector(".shop-section .parent-of-welcome-popub.sign-in-popub").classList.remove("active");
                            },300)
                            document.querySelector(".parent-of-welcome-popub.sign-up-popub .welcome-popub").classList.add("hidden");

                        }}>Start Exploring</button>
                    </div>
                </div>
                <div className="container heading-container">
                    <img src={shopImg} alt=""/>
                    <span className="shop-cover"></span>
                    <div className="shop-text-head">
                        <h2 className="text-title">"Shop Fun: Explore and Buy in Our Online Game"</h2>
                        <p>Discover endless shopping possibilities in our online store. Browse through our wide range of products and enjoy a hassle-free shopping experience from the comfort of your home. Start shopping now and treat yourself to something special.!</p>
                        <div className="accounts-div">
                            <button className="sign-up-btn" onClick={()=>{

                                    let signUpDiv = document.querySelector(".sign-up-div");

                                    signUpDiv.classList.add("active");

                            }}>Sign up</button>
                            <button className="sign-in-btn" onClick={()=>{
                                let signInDiv = document.querySelector(".sign-in-div");
                                    signInDiv.classList.add("active");
                            }}>Sign in</button>
                        </div>
                    </div>
                </div>
                <div className="container games-container">
                    <HeadingOfSections title={"Our Games"} info="Unleash Your Inner Gamer: Explore Our Epic Collection of Games."/>
                    {allGames}                    
                </div>
                <div className="container vr-headest-container">
                    <div className="heading-and-switch-VR">
                        <HeadingOfSections title={<div className="vr-heading-div"><img src={vrIMG} alt=""/> <h2>Headest</h2></div>} info="Step into Another World: Discover Our Virtual Reality Headset Collection"/>
                        <Ul ulClassName="ulForShopVr" li1="All" li2="VR Phone" li3="VR PC" li4="VR Playstation"/>
                </div>                    

                <VrProducts />
                </div>
                <div className="sign-in-div">
                    <div className="container sign-in-container">
                        <div className="sign-in-form-div">
                            <img src="https://images.pexels.com/photos/2273875/pexels-photo-2273875.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
                            <button className="hide-sign-in-div" onClick={()=>{
                                let signInDiv = document.querySelector(".sign-in-div");
                                signInDiv.classList.remove("active");
                            }}><i className="fa-solid fa-xmark"></i></button>
                            <div className="form-text">
                                <h2>Hello !</h2>
                                <h3>Sign Into Your Account</h3>
                            </div>
                            <form onSubmit={(e)=>{
                                e.preventDefault();
                                let askSection = document.querySelector(".shop-section .container.heading-container")
                                let signInDiv = document.querySelector(".sign-in-div");
                                let signInEmailValue = document.querySelector(".sign-in-email-div input").value;
                                let signInPassword = document.querySelector(".sign-in-password-div input").value;
                                
                                if(signInEmailValue !== "" && signInPassword !== "") {

                                    
                                    if(window.localStorage.length !== 0) {
                                        let userEmailFromLocalStorage = JSON.parse(window.localStorage.getItem("userData")).userEmailValue;
                                        let userPasswordFromLocalStorage = JSON.parse(window.localStorage.getItem("userData")).passwordValue;

                                        if(signInEmailValue === userEmailFromLocalStorage && signInPassword === userPasswordFromLocalStorage) {
                                            signInDiv.classList.remove("active");
                                            document.querySelector(".shop-section .parent-of-welcome-popub.sign-in-popub").classList.add("active");
                                            askSection.classList.add("hidden");
                                            window.localStorage.setItem("hiddenClass" , "hidden");
                                        }else {
                                            setUserEmail(signInEmailValue)
                                            document.querySelector(".no-account-text").classList.add("active");
                                            setTimeout(()=>{
                                                document.querySelector(".no-account-text").classList.remove("active");
                                            },3000);
                                        }
                                    }
                                    else {
                                        setUserEmail(signInEmailValue)
                                        document.querySelector(".no-account-text").classList.add("active");
                                        setTimeout(()=>{
                                            document.querySelector(".no-account-text").classList.remove("active");
                                        },3000)
                                    }

                                }
                            }}> 
                                <p className="no-account-text">there is no account with {userEmail}</p>
                                <div className="input-div sign-in-email-div">
                                    <input type="email" placeholder="E-mail" required/>
                                </div>
                                <div className="input-div sign-in-password-div">
                                    <input type="password" placeholder="Password" required/>
                                </div>
                                <div className="sign-in-or-reset">
                                    <input type="submit" value="sign in" className="sign-in-btn"/>
                                    <input type="reset" value="reset" className="reset"/>
                                </div>
                                <Link to="/">Forgot My bassword</Link>
                            </form>
                        </div>

                    </div>
                </div>
                <div className="sign-up-div">
                    <div className="container sign-up-container">
                        <div className="form-div">
                            <button className="hide-sign-up-div" onClick={()=>{
                                let signUpDiv = document.querySelector(".sign-up-div");
                                signUpDiv.classList.remove("active");
                            }}><i className="fa-solid fa-xmark"></i></button>
                            <img src="https://images.pexels.com/photos/2302802/pexels-photo-2302802.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <form onSubmit={(e)=>{
                                e.preventDefault();
                                let userEmailValue = document.querySelector(".email-div input").value;
                                let askSection = document.querySelector(".shop-section .container.heading-container");
                                let welcomePopub = document.querySelector(".shop-section .parent-of-welcome-popub");
                                let signUpDiv = document.querySelector(".sign-up-div");
                                let passwordValue = document.querySelector(".password-div input").value;
                                let confirmPassValue = document.querySelector(".confirm-pass-div input").value;

                                let userData = {
                                    userEmailValue,
                                    passwordValue
                                }

                                if (passwordValue !== confirmPassValue ) {
                                    document.querySelector(".confirm-pass-popub").classList.add("active")
                                }
                                else {
                                    window.localStorage.setItem("hiddenClass" , "hidden");
                                    window.localStorage.setItem("userData" , JSON.stringify(userData))
                                    signUpDiv.classList.remove("active");
                                    askSection.classList.add("hidden");
                                    welcomePopub.classList.add("active");
                                }
                            }}>
                                <div className="input-div">
                                    <input type="text" placeholder="First Name"/>
                                </div>
                                <div className="input-div">
                                    <input type="text" placeholder="Last Name"/>
                                </div>
                                <div className="input-div email-div">
                                    <input type="email" placeholder="E-mail" required />
                                </div>
                                <div className="input-div password-div">
                                    <input type="text" placeholder="Password" required/>
                                </div>
                                <div className="input-div confirm-pass-div">
                                    <input type="text" placeholder="Confirm Password" required/>
                                </div>
                                <div className="create-or-reset-div">
                                    <input type="submit" value="create" className="create-input"/>
                                    <input type="reset" value="reset" className="reset-input"/>
                                </div>
                            </form>
                            <div className="confirm-pass-popub">
                                    <h3 className="confirm-text">Passwords do not match, please try again</h3>
                                    <button className="ok-confirm-btn" onClick={()=>{
                                        document.querySelector(".confirm-pass-popub").classList.remove("active")
                                    }}>Ok</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ShopPage;