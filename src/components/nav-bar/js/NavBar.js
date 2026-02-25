import "../css/navbar.css";
import { Link, redirect, useNavigate } from "react-router-dom";
import wLogo from "../../../media/images/w_logo_by_zee_who_d6hy5hi-fullview.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
function Nav() {
    let myState = useSelector(state => state);
    let countOfCartProducts = myState.AddToCartWorker.length;
    let [userData , setUserData] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        let userDataFromStorage = window.localStorage.getItem("userData");
        if(userDataFromStorage) {
            setUserData(JSON.parse(userDataFromStorage))
        }else {
            setUserData(null)
        }
    },[])
    let handleLogout = () => {
        if(userData) {
            window.localStorage.removeItem("userData");
            window.localStorage.removeItem("hiddenClass");
            setUserData(null);
            navigate("/")
        }
    }
    return (
        <>
            <div className="nav" id="myNav">

                <div className="container">
                    <Link to="/" className="logo-link"

                        onClick={()=>{
                            if (document.querySelector("a.Home").classList.contains("active") )
                            ;
                            else
                            document.querySelectorAll("ul li a").forEach(link=>{
                                link.classList.remove("active");
                                document.querySelector("a.Home").classList.add("active")
                            })
                        }}
                    ><img src={wLogo} alt="" className="nav-logo"/></Link>

                    <i className="fa-solid fa-list show-links" onClick={()=>{

                        let showListBtn = document.querySelector(".show-links");
                        
                        let list = document.querySelector(".container ul");

                        showListBtn.classList.toggle("clicked");

                        list.classList.toggle("active");
                    }}></i>
                    <ul>
                        <li>
                            <Link to="/" className="Home">Home</Link>
                        </li>
                        <li>
                            <Link to="About" className="About">About</Link>
                        </li>
                        <li>
                            <Link to="Gellary" className="Gellary">Gellary</Link>
                        </li>
                        <li>
                            <Link to="Blog" className="Blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="Shop" className="Shop CartCheckoutPageShop">Shop</Link>
                        </li>
                        <li>
                            <Link to="Contact" className="Contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="nav-icons">
                        <button className="search-button" onClick={()=>{
                            let searchDiv = document.querySelector(".search-div");
                            searchDiv.classList.toggle("active");
                        }}><i className="fa-solid fa-magnifying-glass"></i></button>      

                        <Link to="Cart" onClick={()=>{
                            document.querySelectorAll(".nav .container ul li a").forEach(route => {
                                route.classList.remove("active")
                            })
                            document.querySelector(".nav-icons i.cart-icon").classList.add("active");

                        }}>
                        <i className="fa-solid fa-cart-shopping cart-icon Cart CartCheckoutPage CartCheckoutPageComplatedOrder"><span>{countOfCartProducts}</span></i></Link>
                        {
                            userData
                            ?
                            <i className="fa-solid fa-arrow-right-from-bracket logout-icon"
                            onClick={handleLogout}
                            ></i>
                            :
                            ""
                        }                
                    </div>
                </div>
                <div className="search-div">
                    <button className="hide-search-div" onClick={()=>{
                        let searchDiv = document.querySelector(".search-div");
                        searchDiv.classList.remove("active");
                    }}><i className="fa-solid fa-xmark"></i></button>

                    <div className="search-input">
                        <input type="text" placeholder="search about anything"/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav;