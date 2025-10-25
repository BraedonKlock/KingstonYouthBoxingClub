import "../styles/homePage.css";
import { Link } from "react-router-dom";
export default function HomePage() {
    return (
        <>
            <section id="homePage-section">
                <Link to={"/classes"} id="joinNowLink">JOIN NOW!</Link>
            </section>
            <section>
                <h1>testing</h1>
            </section>
        </>
    )
}