import "./App.css";
import React, { useEffect, useState, createContext } from "react";
import { emptyBoard, generateWordSet } from "./Util/WordleSet";
import Nav from "./componets/Game/GameTitle/Title.jsx";
import Alert from "./componets/Game/Notifications/Alert/Alert.jsx";
import GameOver from "./componets/Game/Notifications/GameOver/GameOver.jsx";
import GameStatistics from "./componets/Game/GameStats/GameStatistics.jsx";
import Score from "./componets/Game/Score&HelpSection/Score.jsx";
import Game from "./componets/Game/PlayingArea/Game.jsx";

export const AppContext = createContext();

function App() {
  // Board & Tile values
  const [board, setBoard] = useState(emptyBoard);
  const [CurrAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  // Word dictionary
  const [wordSet, setWordSet] = useState(new Set());
  // Guessed letters
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [almostLetters, setAlmostLetters] = useState([]);
  // gameEnd
  const [gameOver, setGameOver] = useState({ gameEnd: false, guessed: false });
  // Correct guess
  const [correctWord, setCorrectWord] = useState("");
  // Current word
  let currWord = "";
  // alert message
  const [alertMessage, setAlertMessage] = useState("");
  // alert condition
  const [showAlert, setShowAlert] = useState(false);
  // game condition
  const [newGame, setNewGame] = useState();
  // Game Stats
  const [winStreak, setWinStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [gamesWon, setGamesWon] = useState(0);
  const [score, setScore] = useState(0);
  const [attemptstats, setAttemptStats] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
  });

  // BONUS ROUND
  const bonusRound = gamesPlayed % 5 === 0 ? "BonusAPP" : undefined;

  //==================================================================local storage
  let gameStats = {
    stat_gamesWon: gamesWon,
    stat_gamesPlayed: gamesPlayed,
    stat_winStreak: winStreak,
    stat_maxStreak: maxStreak,
    stat_score: score,
    stat_attemptstats: attemptstats,
  };

  //==================================================================retrieve Local Storage
  useEffect(() => {
    const retrieved_stats = window.localStorage.getItem("STATS");
    gameStats =
      // eslint-disable-next-line
      retrieved_stats !== null || {} ? JSON.parse(retrieved_stats) : [];
    if (gameStats !== null) {
      setWinStreak(gameStats.stat_winStreak);
      setMaxStreak(gameStats.stat_maxStreak);
      setGamesPlayed(gameStats.stat_gamesPlayed);
      setGamesWon(gameStats.stat_gamesWon);
      setScore(gameStats.stat_score);
      setAttemptStats(gameStats.stat_attemptstats);
    }
  }, []);

  //==================================================================set local Storage
  useEffect(() => {
    window.localStorage.clear();
    window.localStorage.setItem("STATS", JSON.stringify(gameStats));
    // eslint-disable-next-line
  }, [gamesPlayed]);

  //==================================================================assign dictionary and correctWord
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.WordSet);
      setCorrectWord(words.wordoftheday);
      setNewGame(false);
    });
  }, [newGame]);

  //==================================================================alert timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [showAlert]);

  //==================================================================play the game again
  const playAgain = () => {
    const newBoard = [
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ];
    setBoard(newBoard);
    setCurrAttempt({ attempt: 0, letterPos: 0 });
    setDisabledLetters([]);
    setCorrectLetters([]);
    setAlmostLetters([]);
    setGameOver({ gameEnd: false, guessed: false });
    setAlertMessage("");
  };

  //===================================================================ON SELECT

  const onSelect = (keyVal) => {
    if (gameOver.gameEnd === true) return;
    if (CurrAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[CurrAttempt.attempt][CurrAttempt.letterPos] = keyVal;
    setBoard(newBoard);
    setCurrAttempt({ ...CurrAttempt, letterPos: CurrAttempt.letterPos + 1 });
  };

  //===================================================================ON DELETE

  const onDelete = () => {
    if (gameOver.gameEnd === true) return;
    if (CurrAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[CurrAttempt.attempt][CurrAttempt.letterPos - 1] = "";
    setBoard(newBoard);
    setCurrAttempt({ ...CurrAttempt, letterPos: CurrAttempt.letterPos - 1 });
  };

  //===================================================================ON ENTER
  const onEnter = () => {
    //==================================================================Game Condition
    if (gameOver.gameEnd === true) {
      setNewGame(true);
      playAgain();
    }

    //==================================================================Board-Row Condition
    if (CurrAttempt.letterPos <= 4 && CurrAttempt.letterPos > 0) {
      setAlertMessage("Not Enough Letters  (ㆆ_ㆆ) 👎");
      setShowAlert(true);
    }

    if (CurrAttempt.letterPos !== 5) return;
    //==================================================================Gather user Input
    for (let i = 0; i < 5; i++) {
      currWord += board[CurrAttempt.attempt][i];
    }

    //==================================================================checking if word is present in wordBank
    if (wordSet.has(currWord.toLowerCase())) {
      setCurrAttempt({ attempt: CurrAttempt.attempt + 1, letterPos: 0 });
    } else {
      setAlertMessage("Word Not in DicTionarY  ( ͠• ︵ ͠• )💨 ");
      setShowAlert(true);
    }

    //==================================================================Result Condition
    //==================================================================guessed correct
    if (
      currWord.toUpperCase() === correctWord.toUpperCase() &&
      wordSet.has(currWord.toLowerCase())
    ) {
      setTimeout(() => {
        setGameOver({ gameEnd: true, guessed: true });
        //==================================================================update stats
        setWinStreak(winStreak + 1);
        setAlertMessage("CongraTulaTionS ( ͡❛ ‿ ͡❛) ");
        setGamesPlayed(gamesPlayed + 1);
        setGamesWon(gamesWon + 1);

        //==================================================================Update Score
        if (CurrAttempt.attempt === 0) {
          setAttemptStats({ ...attemptstats, one: attemptstats.one + 1 });
          setScore(score + 15);
          setAlertMessage("!! Your a GeNiuS (⊙.⊙(☉̃ₒ☉)⊙.⊙) !!");
          if (winStreak >= 5 && winStreak < 10) setScore(score + 17);
          if (winStreak >= 10 && winStreak < 20) setScore(score + 18);
          if (winStreak >= 20) setScore(score + 20);
          if (gamesPlayed % 5 === 0) setScore(score + 25);
        }

        if (CurrAttempt.attempt === 1) {
          setAttemptStats({ ...attemptstats, two: attemptstats.two + 1 });
          setScore(score + 10);
          setAlertMessage("!! Magnificient ᕙ(`▿´)ᕗ");
          if (winStreak >= 5 && winStreak < 10) setScore(score + 12);
          if (winStreak >= 10 && winStreak < 20) setScore(score + 13);
          if (winStreak >= 20) setScore(score + 15);
          if (gamesPlayed % 5 === 0) setScore(score + 20);
        }

        if (CurrAttempt.attempt === 2) {
          setAttemptStats({ ...attemptstats, three: attemptstats.three + 1 });
          setScore(score + 8);
          setAlertMessage("!! Great (>‿◠)✌");
          if (winStreak >= 5 && winStreak < 10) setScore(score + 10);
          if (winStreak >= 10 && winStreak < 20) setScore(score + 11);
          if (winStreak >= 20) setScore(score + 13);
          if (gamesPlayed % 5 === 0) setScore(score + 18);
        }

        if (CurrAttempt.attempt === 3) {
          setAttemptStats({ ...attemptstats, four: attemptstats.four + 1 });
          setScore(score + 6);
          setAlertMessage("!! Nice One Bud (¬‿¬)");
          if (winStreak >= 5 && winStreak < 10) setScore(score + 8);
          if (winStreak >= 10 && winStreak < 20) setScore(score + 9);
          if (winStreak >= 20) setScore(score + 11);
          if (gamesPlayed % 5 === 0) setScore(score + 16);
        }

        if (CurrAttempt.attempt === 4) {
          setAttemptStats({ ...attemptstats, five: attemptstats.five + 1 });
          setScore(score + 4);
          if (winStreak >= 5 && winStreak < 10) setScore(score + 6);
          if (winStreak >= 10 && winStreak < 20) setScore(score + 7);
          if (winStreak >= 20) setScore(score + 9);
          if (gamesPlayed % 5 === 0) setScore(score + 14);
        }

        if (CurrAttempt.attempt === 5) {
          setAttemptStats({ ...attemptstats, six: attemptstats.six + 1 });
          setScore(score + 2);
          if (winStreak >= 5 && winStreak < 10) setScore(score + 7);
          if (winStreak >= 10 && winStreak < 20) setScore(score + 8);
          if (winStreak >= 20) setScore(score + 10);
          if (gamesPlayed % 5 === 0) setScore(score + 15);
        }

        //==================================================================update maxx streak
        if (winStreak > maxStreak) {
          setMaxStreak(winStreak);
          setAlertMessage(
            " !! ConGraTulaTionS,You Have SeT A New Personal Record !! ( ͡🔥 𝆒 ͡🔥)✌ "
          );
        }
      }, 1860);
      return;
    }

    //==================================================================guess wrong
    if (CurrAttempt.attempt === 5 && wordSet.has(currWord.toLowerCase())) {
      setTimeout(() => {
        setGameOver({ gameEnd: true, guessed: false });
        //==================================================================update stats
        if (score >= 50) setScore(score - 3);
        setWinStreak(0);
        setGamesPlayed(gamesPlayed + 1);
        if (winStreak > maxStreak) setMaxStreak(winStreak);
        setShowAlert(true);
      }, 1850);
      setAlertMessage("HarD LucK BuddY (.⊗︠ ‿ ︡⊗.) ");
      return;
    }
  };

  return (
    <div className={"App " + bonusRound}>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          CurrAttempt,
          setCurrAttempt,
          correctWord,
          currWord,
          //=============Functions
          onSelect,
          onDelete,
          onEnter,
          //=============GameOver
          gameOver,
          //=============LetterState
          disabledLetters,
          setDisabledLetters,
          correctLetters,
          setCorrectLetters,
          almostLetters,
          setAlmostLetters,
          // ===========Games
          gamesPlayed,
        }}
      >
        <Nav />
        <GameStatistics
          wins={gamesWon}
          streak={winStreak}
          played={gamesPlayed}
          max={maxStreak}
        />
        <Score Score={score} Allstats={gameStats} />
        {gameOver.gameEnd ? (
          <GameOver message={alertMessage} />
        ) : showAlert ? (
          <Alert message={alertMessage} />
        ) : null}
        <Game />
      </AppContext.Provider>
    </div>
  );
}

export default App;
