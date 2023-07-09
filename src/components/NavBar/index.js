import './index.css'

const NavBar = props => {
  const {newScore, topScore, loss} = props
  const score = loss ? 'nav-background3' : 'nav-background1'

  return (
    <div className="nav-background">
      <div className="nav-background2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      <div className={score}>
        <p>Score: {newScore}</p>
        <p className="score3">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
