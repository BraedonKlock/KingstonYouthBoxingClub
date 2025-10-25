import "../styles/Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <button id="hamburgerMenu" onClick={() => setIsOpen(open => !open)}>☰</button>

            <nav className={`nav ${isOpen ? "open" : ""}`}>
                <Link className="link" to={"/"}>Home</Link>
                <Link className="link" to={"/classes"}>Classes</Link>
                <Link className="link" to={"/coaches"}>Coaches</Link>
                <Link className="link" to={"/contact"}>Contact Us</Link>

            </nav>
        </header>
    )
}