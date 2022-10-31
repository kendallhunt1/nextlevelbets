import React, {useState, useEffect} from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

function WeeklyGames () {
  const APP_KEY = "88533bf9e6b545029d61134fe2af91da";
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/Schedules/2022?key=${APP_KEY}`);
      const data = await response.json();

      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 1) {
          weekOneGames.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 2) {
          weekTwo.push(data[i].AwayTeam);
          weekTwoGames.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 3) {
          weekThreeGames.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 4) {
          weekFourGames.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 5) {
          weekFiveGames.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 6) {
          weekSixGames.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 7) {
          weekSevenGames.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 8) {
          weekEightGames.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 9) {
          weekNineGames.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 10) {
          week10Games.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 11) {
          week11Games.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 12) {
          week12Games.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 13) {
          week13Games.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 14) {
          week14Games.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 15) {
          week15Games.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 16) {
          week16Games.push(data[i]);
        }
      }
      for (var i = 0; i < data.length; i++) {
        if (data[i].Week === 17) {
          week17Games.push(data[i]);
        }
      }
      
    } 
    catch (err) {
      alert(err.message);
    }
    await fetchImage();
    await forLoop(weekOneGames);
    await forLoop(weekTwoGames);
    await forLoop(weekThreeGames);
    await forLoop(weekFourGames);
    await forLoop(weekFiveGames);
    await forLoop(weekSixGames);
    await weekSixGames.splice(0, 4);
    await forLoop(weekSevenGames);
    await weekSevenGames.splice(0, 4);
    await forLoop(weekEightGames);
    await weekEightGames.splice(0, 2);
    await forLoop(weekNineGames);
    await weekNineGames.splice(0, 6);
    await forLoop(week10Games);
    await week10Games.splice(0, 4);
    await forLoop(week11Games);
    await week11Games.splice(0, 4);
    await forLoop(week12Games);
    await forLoop(week13Games);
    await week13Games.splice(0, 2)
    await forLoop(week14Games);
    week14Games.splice(0, 6);
    await forLoop(week15Games);
    await forLoop(week16Games);
    await forLoop(week17Games);
  };

  const fetchImage = async () => {
    try {
      const image = await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/AllTeams?key=${APP_KEY}`);
      const imageData = await image.json();
      await console.log(imageData);
      var key = "";
      var teamLogo = "";

      for (var  i = 0; i < imageData.length; i++) {
        key = await imageData[i].Key;
        teamLogo = await imageData[i].WikipediaLogoUrl;
        await newArray.push({key, teamLogo});
        }
      } catch (err) {
        alert(err.message);
      }
      await console.log(newArray);
  };

  const forLoop = (givenWeek) => {
    for (var i = 0; i < givenWeek.length; i++) {

      var date = givenWeek[i].Date;
      var GameDate = ""
      if (date != null) {
        GameDate = date.slice(5,7) + "-" + date.slice(8,10) + "-" + date.slice(0, 4);
      } else {
        GameDate = "Bye Week";
      }

      var GameHour = "";
      if (date != null) {
        GameHour = date.slice(11,13);
      } else {
        GameHour = "0";
      }

      var GameTimeOfDay = "";
      if (date != null && parseInt(date.slice(11,13)) >= 12) {
        GameTimeOfDay = " PM";
      } if (date != null &&  parseInt(date.slice(11,13)) <= 11) {
          GameTimeOfDay = " AM";
        } if (date === null) {
        GameTimeOfDay = "";
        }

      if (date != null) {
        GameHour = ((GameHour + 11) % 12 + 1);
      } else {
        GameHour = GameHour;
      }

      var GameMinute = ""
      if (date != null) {
        GameMinute = date.slice(14, 16);
      } else {
        GameMinute = "0";
      }

      var GameTime = "";
      if (date != null) {
        GameTime = GameHour + ":" + GameMinute + GameTimeOfDay;
      } else {
        GameTime = "Bye Week";
      }

      givenWeek[i].GameDate = GameDate;
      givenWeek[i].GameTime = GameTime;
      for (var k = 0; k < newArray.length; k++) {
        if (newArray[k].key === givenWeek[i].HomeTeam) {
          givenWeek[i].HomeTeamLogo = newArray[k].teamLogo;
        }
        if (newArray[k].key === givenWeek[i].AwayTeam) {
          givenWeek[i].AwayTeamLogo = newArray[k].teamLogo;
        }
      }
    }

    if (weekOneGames.length > 10) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
    console.log(givenWeek);
  }

  useEffect(() => {
    fetchData();
  }, []);

  var newArray = [];

  const [loaded, setLoaded] = useState(false);
  const [weekTwo] = useState([]);
  const [weekOneGames] = useState([]);
  const [weekTwoGames] = useState([]);
  const [weekThreeGames] = useState([]);
  const [weekFourGames] = useState([]);
  const [weekFiveGames] = useState([]);
  const [weekSixGames] = useState([]);
  const [weekSevenGames] = useState([]);
  const [weekEightGames] = useState([]);
  const [weekNineGames] = useState([]);
  const [week10Games] = useState([]);
  const [week11Games] = useState([]);
  const [week12Games] = useState([]);
  const [week13Games] = useState([]);
  const [week14Games] = useState([]);
  const [week15Games] = useState([]);
  const [week16Games] = useState([]);
  const [week17Games] = useState([]);



  function Week({props}) {
    return (
      <div className="app">
      <div className="weeklyGames">
        {props.map((i) => (
            <div className="gameBox">

              <div className="teamsAndOdds">
                <div className="teamsPlayingEachOther">
                  <div className="teamNameAndImage homeTeamNameAndImage">
                    <div className="teamLogo homeTeamLogo">
                      <img src={i.HomeTeamLogo} alt="Team Logo" />
                    </div>
                    <span className="teamName homeTeamName">{i.HomeTeam} </span>
                  </div>
                  <div className="teamNameAndImage awayTeamNameAndImage">
                    <div className="teamLogo awayTeamLogo">
                      <img src={i.AwayTeamLogo} alt="Team Logo" />
                    </div>
                    <span className="teamName awayTeamName">{i.AwayTeam} </span>
                  </div>
                </div>

                <div className="gamedayOdds">
                  <div className="bettingHeadings">
                    <span>Spread</span>
                    <span>O/U</span>
                    <span>ML</span>
                  </div>
                  <div className="homeTeamOdds">
                    <div className="oddsBox">
                      <span className="homeTeamOverUnder">{i.PointSpread}</span>
                    </div>
                    <div className="oddsBox">
                      <span className="gameTotalOverUnder">{i.OverUnder}</span>
                    </div>
                    <div className="oddsBox">
                      <span className="homeTeamMoneyLineOdds">{i.HomeTeamMoneyLine}</span>
                    </div>
                  </div>
                  <div className="awayTeamOdds">
                    <div className="oddsBox">
                      <span className="homeTeamOverUnder">{i.PointSpread}</span>
                    </div>
                    <div className="oddsBox">
                      <span className="gameTotalOverUnder">{i.OverUnder}</span>
                    </div>
                    <div className="oddsBox">
                      <span className="awayTeamMoneyLineOdds">{i.AwayTeamMoneyLine}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="locationAndBettingSites">

                <div className="gamedayLocationDetails">
                  <div className="dateTime">
                    <span>{i.GameTime}</span>
                    <span>{i.GameDate}</span>
                  </div>
                </div>
                <div className="bettingSiteCircles">

                  <div className="bettingSite">
                    <div className="bettingSiteCircle">
                      <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/fyz4mydi8ceuovtoaooy" alt="Draft Kings Sportsbook" />
                    </div>
                  </div>

                  <div className="bettingSite">
                    <div className="bettingSiteCircle">
                      <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1479492003/l1gap5ouxs5n9qwkww0j.png" alt="FanDuel Sportsbook" />
                    </div>
                  </div>

                  <div className="bettingSite">
                    <div className="bettingSiteCircle">
                      <img src="https://play-lh.googleusercontent.com/VSh6XgCwdUC36na5lSKLH8PG-hU-alud1Zj4UkyBv9j4_2VIq_zFVz9TTS6Pog-IeBUx" alt="BetMGM" />
                    </div>
                  </div>

                  <div className="bettingSite">
                    <div className="bettingSiteCircle">
                      <img src="https://q9k6v6u6.rocketcdn.me/wp-content/uploads/2020/09/mybookielogo.png" alt="MyBookie.ag" />
                    </div>
                  </div>

                </div>
              </div>

              <div className="advancedPredictorTab">
                <span>ADVANCED DETAILS</span>
                <div className="expandArrow">
                  <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="" />
                </div>
              </div>
            </div>
        ))}
      </div>
      </div>
    )
  }

  const Games = () => {
    return (
    <div>
      <Header />
      <div className="padding">
      <h2>Week 1</h2>
      <Week props={weekOneGames} />
      <h2>Week 2</h2>

      <Week props={weekTwoGames} />
      <h2>Week 3</h2>

      <Week props={weekThreeGames} />
      <h2>Week 4</h2>

      <Week props={weekFourGames} />
      <h2>Week 5</h2>

      <Week props={weekFiveGames} />
      <h2>Week 6</h2>

      <Week props={weekSixGames} />
      <h2>Week 7</h2>

      <Week props={weekSevenGames} />
      <h2>Week 8</h2>

      <Week props={weekEightGames} />
      <h2>Week 9</h2>

      <Week props={weekNineGames} />
      <h2>Week 10</h2>

      <Week props={week10Games} />
      <h2>Week 11</h2>

      <Week props={week11Games} />
      <h2>Week 12</h2>

      <Week props={week12Games} />
      <h2>Week 13</h2>

      <Week props={week13Games} />
      <h2>Week 14</h2>

      <Week props={week14Games} />
      <h2>Week 15</h2>

      <Week props={week15Games} />
      <h2>Week 16</h2>

      <Week props={week16Games} />
      <h2>Week 17</h2>

      <Week props={week17Games} />
      </div>
      <Footer />
    </div>
  )
  }

  if (loaded === false) return (
    <div className="App">
      <Header />
        <div className="loadingPage">
          <h1>Loading...</h1>
        </div>
      <Footer />
    </div>
  )

  if (loaded === true) return (
    <Games />
  )
}

export default WeeklyGames;