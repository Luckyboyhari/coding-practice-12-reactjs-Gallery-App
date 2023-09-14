// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setActiveThumbId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const activeButtonStyle = isActive ? `thumbnail active` : `thumbnail`

  const onClickButton = () => {
    setActiveThumbId(id)
  }

  return (
    <li className="list-container">
      <button className="button" type="button" onClick={onClickButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeButtonStyle}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
