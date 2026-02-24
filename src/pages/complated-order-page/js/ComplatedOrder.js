import "../css/complated.css"
import { Link } from "react-router-dom";
function ComplatedPage() {
    return (
        <>
            <section className="complated-section">
                    <img src="https://img.freepik.com/premium-photo/3d-cartoon-hand-closeup-handholding-cardboard-box-fast-delivery-concept-3d-render-illustration_250043-479.jpg?w=900" alt=""/>
                    <Link to="/" onClick={()=>{
                        window.location.pathname = ""
                    }}>Back to home</Link>
            </section>
        
        </>
    )
}


export default ComplatedPage;