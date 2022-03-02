import './index.css'

const Tabs = props => {
  const {tabDetails, displayQus} = props
  const {text, id} = tabDetails

  const activeQus = () => {
    displayQus(id)
  }

  return (
    <li className="list-qns">
      <button type="button" onClick={activeQus} className="qns-tab">
        {text}
      </button>
    </li>
  )
}

export default Tabs
