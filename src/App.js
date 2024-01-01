import './App.css';
import {useState, useEffect} from "react";

export default function App() {
    const [position, setPosition] = useState({});

    useEffect(() => {
        const noButton = document.getElementById("noButton");
        if (noButton) {
            noButton.style.left = `${position.x}px`;
            noButton.style.top = `${position.y}px`;
        }
    }, [position]);

    const moveButton = () => {
        const buttonWidth = 60;
        const buttonHeight = 60;

        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;

        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        setPosition({ x: newX, y: newY });
    };
    const nextPage = () => {
        window.location.href = "yes.html";
    }

    return (
    <div className="App">
        <div className="container">
            <div>
                <h1 className="header_text">Do you wanna go out with me?</h1>
            </div>
            <div className="gif_container">
                <img
                    src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif"
                    alt="Cute animated illustration" />
            </div>
            <div className="buttons">
                <button className="btn" id="yesButton" onClick={nextPage}>Yes</button>
                <button className="btn" id="noButton" onClick={moveButton} onMouseOver={moveButton}>No</button>
            </div>
        </div>
    </div>
    );
}
