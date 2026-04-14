import Scoreboard from "./Scoreboard";

function Header({ score, bestScore }) {
  return (
    <header className="header">
      <h1>Memory Card Game</h1>
      <p>Click each card only once!</p>
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  );
}

export default Header;