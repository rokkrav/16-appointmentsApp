import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, appointmentTitle, date, isStarred} = appointmentDetails

  const starredImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStarred = () => {
    toggleIsStarred(id)
  }
  return (
    <li className="appointment-item">
      <div className="heading-container">
        <p className="appointment-name">{appointmentTitle}</p>
        <button
          type="button"
          testid="star"
          className="star-button"
          onClick={onClickStarred}
        >
          <img src={starredImage} alt="star" className="star-image" />
        </button>
      </div>
      <p className="date">Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
