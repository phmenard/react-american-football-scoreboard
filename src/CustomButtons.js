//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";

let CustomButtons = (props) => {

    let plays = ['Passing', 'Running', 'Trick', 'Flee Flicker', 'Hail Mary', 'Latteral', 'Counter', 'Draw', 'Pitch'];

    let extraPoint = [0, 1, 0,0, 1, 1, 0, 1];

    const hideButton = {
        display: 'none'
    };

    const showButton = {
        display: 'inline'
    };

    let [kickButton, setKickButton] = useState(hideButton);
    let [midField, setMidField] = useState(false);

    return (

        <div className="homeButtons">

            {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

            <button className="homeButtons__touchdown" onClick={() => {
                if (props.quarter == 4) {
                    props.setQuarter(1);
                } else {
                    props.setQuarter(props.quarter + 1);
                }

                
            }

            }>Change Quarter</button>

            <button className="homeButtons__fieldGoal" onClick={() => {
                if (props.down == 4) {
                    props.setDown(1);
                } else {
                    props.setDown(props.down + 1);
                }

            }

            }>Change Down</button>


            <button className="homeButtons__fieldGoal" onClick={() => {
                

                // grab a random # from -30-10
                let yardsGained = Math.floor(Math.random() * 41) - 10;


                // whats left in the play for yards to gain?
                let yardsToGo = props.toGo - yardsGained;
                if (yardsToGo <= 0) {
                    // We got a first dwon
                    yardsToGo = 10;
                    props.setDown(1);
                } else {
                    props.setDown(props.down + 1);
                    console.log(props.down);
                    if (props.down == 3) {
                        
                        setKickButton(showButton);
                    }
                }
                props.setToGo(yardsToGo);

                console.log(midField);

                let ballPosition = 0;
                if (!midField) {
                    ballPosition = props.ballOn + yardsGained;
                    if (ballPosition < 50) {
                        setMidField(false);
                    } else {
                        ballPosition = (50 - yardsGained);
                        setMidField(true);
                    }
                    props.setBallOn(ballPosition);

                } else {
                    ballPosition = props.ballOn - yardsGained;
                    props.setBallOn(ballPosition);
                }

                if (ballPosition <= 0) {
                    if (props.possession == 'away') {
                        props.setHomeScore(props.homeScore + (6 + extraPoint[Math.floor(Math.random() * extraPoint.length)]));
                        props.setPossession('home');
                    } else {
                        props.setAwayScore(props.awayScore + 6);
                        props.setPossession('away');
                    }
                    props.setDown(1);
                    setMidField(false);
                    props.setBallOn(Math.floor(Math.random() * 50) + 1);
                }


                console.log(`You completed a ${plays[Math.floor(Math.random() * plays.length)]} play for ${yardsGained} yards.`);
                
            }

            }>Play a Down</button>

            <button style={kickButton} className="homeButtons__fieldGoal" onClick={() => {
                setKickButton(hideButton);
                props.setToGo(10);
                props.setDown(1);
                setMidField(false);
                props.setBallOn(Math.floor(Math.random() * 50) + 1);
                if (props.possession == 'away') {
                    props.setPossession('away');
                } else {
                    props.setPossession('home');
                }
            }

            }>Punt</button>

        </div>
    );
}

export default CustomButtons;