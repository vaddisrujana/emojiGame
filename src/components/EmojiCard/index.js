import './index.css'

const EmojiCard = props => {
  const {emojisList, onclickEmoji} = props
  const {emojiUrl, id, emojiName} = emojisList

  const onclick = () => {
    onclickEmoji(id)
  }
  return (
    <li className="list">
      <div>
        <button className="button" type="button" onClick={onclick}>
          <img src={emojiUrl} alt={emojiName} className="emoji-image" />
        </button>
      </div>
    </li>
  )
}

export default EmojiCard
