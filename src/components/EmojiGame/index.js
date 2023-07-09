/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

const newlist1 = []

class EmojiGame extends Component {
  state = {
    newEmojisList: [],
    newScore: 0,
    topScore: 0,
    loss: false,
    list1: newlist1,
  }

  onclickEmoji = id => {
    const {emojisList} = this.props
    const {list1} = this.state

    let updateEmojisList = []

    updateEmojisList = emojisList.sort(() => Math.random() - 0.5)
    this.setState({newEmojisList: updateEmojisList})
    console.log(list1)
    list1.map(each => {
      if (each === id) {
        console.log('hi')
        return this.setState({loss: true})
      }

      return null
    })
    list1.push(id)
    this.setState(prevState => ({newScore: prevState.newScore + 1}))

    console.log(list1.length)
  }

  onPlayagain = () => {
    const {newScore, topScore} = this.state
    this.setState({loss: false})
    this.setState({newScore: 0})
    this.setState({list1: []})
    if (topScore < newScore) {
      this.setState({topScore: newScore})
    }
  }

  render() {
    const {emojisList} = this.props
    const {newScore, loss, topScore} = this.state
    console.log(loss)
    return (
      <div className="background">
        <div>
          <NavBar newScore={newScore} topScore={topScore} loss={loss} />
        </div>
        <div className="emoji-background">
          {loss ? (
            <WinOrLoseCard newScore={newScore} onPlayagain={this.onPlayagain} />
          ) : (
            emojisList.map(each => (
              <EmojiCard
                emojisList={each}
                key={each.id}
                onclickEmoji={this.onclickEmoji}
              />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
