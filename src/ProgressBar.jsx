// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    const handleButtonClick = () => {
        if(progress < 100) {
            setProgress(progress + 20);
        }
    }

    const handleButtonReset = () => {
        setProgress(0);
    }

    const getColor = () => {
        if(progress < 40){
            return "#edb4b4"
        } else if (progress < 70){
            return "#f7d9ab"
        } else {
            return "#bbdbaf"
        }
    };


    return <div className= "container">
        <div className="progress-bar">
            <div className= "progress-bar-fill" style={{width: `${progress}%`, backgroundColor: getColor()}}></div>
        </div>
        <div className= "progress-label">{progress}%</div>
        <button onClick={handleButtonClick}>Progress</button>
        <button onClick={handleButtonReset}>Reset</button>
    </div>;
};