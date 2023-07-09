import './index.css'

const WinOrLoseCard = props => {
  const {newScore, onPlayagain} = props
  const image =
    newScore < 12
      ? 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const text = newScore < 12 ? 'You Loss' : 'You Win'
  const scoretext = newScore < 12 ? 'Score' : 'Best Score'

  const playAgain = () => {
    onPlayagain()
  }
  return (
    <div className="wl-background">
      <div className="wl-background1">
        <h1 className="win-or-lose">{text}</h1>
        <div className="wl-background2">
          <p className="score">{scoretext}</p>
          <p className="score1">{newScore}/12</p>
          <button className="button1" type="button" onClick={playAgain}>
            Play Again
          </button>
        </div>
      </div>
      <img src={image} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
