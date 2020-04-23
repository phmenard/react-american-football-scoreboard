//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";

let MyTimer = (props) => {
    const [secondsOnes, setSecondsOnes] = useState(9);
    const [secondsTens, setSecondsTens] = useState(5);
    const [minutesOnes, setMinutesOnes] = useState(4);
    const [minutesTens, setMinutesTens] = useState(1);


    let reset = () => {
        setMinutesOnes(4);
        setMinutesTens(1);
        setSecondsOnes(9);
        setSecondsTens(5);
    }


    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (secondsOnes == 0) {
                    if (secondsTens == 0 && minutesOnes == 0 && minutesTens == 0) {
                        if (props.quarter == 4) {
                            setIsActive(false);
                        } else {
                            props.setQuarter(props.quarter + 1);
                            reset();
                        }


                    } else {
                        setSecondsOnes(9);

                        if (secondsTens == 0) {
                            setSecondsTens(5);


                            if (minutesOnes == 0) {
                                setMinutesOnes(9);

                                setMinutesTens(minutesTens => minutesTens - 1);
                            } else {
                                setMinutesOnes(minutesOnes => minutesOnes - 1);
                            }

                        } else {
                            setSecondsTens(setSecondsTens => setSecondsTens - 1);
                        }
                    }

                } else {
                    setSecondsOnes(secondsOnes => secondsOnes - 1);
                }


            }, 100);
        } else if (!isActive && secondsOnes !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, secondsOnes]);

    return (
        <div className="timer">{minutesTens}{minutesOnes}:{secondsTens}{secondsOnes}</div>
    );
}



export default MyTimer;