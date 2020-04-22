//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";
import MyTimer from "./MyTimer";
import CustomButtons from "./CustomButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);
  let [quarter, setQuarter] = useState(1);
  let [down, setDown] = useState(1);
  let [toGo, setToGo] = useState(10);
  let [ballOn, setBallOn] = useState(20);


  let myTimer = <MyTimer />;

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <MyTimer />
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} down={down} toGo={toGo} ballOn={ballOn} />
        <div>Hello</div>
      </section>
      <section className="buttons">
        <HomeButtons func={setHomeScore} score={homeScore} />

        <CustomButtons setQuarter={setQuarter} quarter={quarter}
          setDown={setDown} down={down} setToGo={setToGo} toGo={toGo}
          setBallOn={setBallOn} ballOn={ballOn}/>
          
        <AwayButtons func={setAwayScore} score={awayScore} />

      </section>
    </div>
  );



}





export default App;
