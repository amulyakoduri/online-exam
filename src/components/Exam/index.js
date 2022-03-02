import {Component} from 'react'
import {RiTimerLine} from 'react-icons/ri'
import {AiFillAndroid} from 'react-icons/ai'
import {BsCheckCircle} from 'react-icons/bs'
import {BiListCheck} from 'react-icons/bi'
import Tabs from '../Tabs'
import './index.css'

const quizData = [
  {
    id: 0,
    question: `What is the capital of Nigeria?`,
    options: [`New Delhi`, `Abuja`, `Owerri`, `Enugu`],
    answer: `Abuja`,
  },
  {
    id: 1,
    question: `What is the capital of India?`,
    options: [`New Delhi`, `Abuja`, `Mumbai`, `Aba`],
    answer: `New Delhi`,
  },
  {
    id: 2,
    question: `What is the capital of Australia?`,
    options: [`Melbourne`, `Akokwa`, `Owerri`, `Sydney`],
    answer: `Sydney`,
  },
  {
    id: 3,
    question: `What is the capital of Turkey?`,
    options: [`Rijadh`, `Ankara`, `Istanbul`, `Abakaliki`],
    answer: `Ankara`,
  },
  {
    id: 4,
    question: `What is the capital of Syria?`,
    options: [`Syria`, `Damascus`, `Anambra`, `Enugu`],
    answer: `Damascus`,
  },
  {
    id: 5,
    question: `What is the capital of Telangana?`,
    options: [`New Delhi`, `Hyderabad`, `Owerri`, `Enugu`],
    answer: `Hyderabad`,
  },
  {
    id: 6,
    question: `What is the capital of kerala?`,
    options: [`Thiruvanathapuram`, `Abuja`, `Owerri`, `Enugu`],
    answer: `Thiruvanathapuram`,
  },
  {
    id: 7,
    question: `What is the capital of Bhihar?`,
    options: [`New Delhi`, `Abuja`, `Owerri`, `Dispur`],
    answer: `Dispur`,
  },
  {
    id: 8,
    question: `What is the capital of AndraPradesh?`,
    options: [`New Delhi`, `Amaravathi`, `Owerri`, `Enugu`],
    answer: `Amaravathi`,
  },
  {
    id: 9,
    question: `What is the capital of ArunachalPradesh?`,
    options: [`New Delhi`, `Abuja`, `Owerri`, `Itanagar`],
    answer: 'Itanagar',
  },
  {
    id: 10,
    question: `What is the capital of Gao?`,
    options: [`New Delhi`, `Panaji`, `Owerri`, `Enugu`],
    answer: `Panaji`,
  },
  {
    id: 11,
    question: `What is the capital of Haryana?`,
    options: [`New Delhi`, `Abuja`, `Owerri`, `Chandigarh`],
    answer: `Chandigarh`,
  },
  {
    id: 12,
    question: `What is the capital of Manipur?`,
    options: [`Impal`, `Abuja`, `Owerri`, `Enugu`],
    answer: `Impal`,
  },
  {
    id: 13,
    question: `What is the capital of Mizoram?`,
    options: [`New Delhi`, `Aizwal`, `Owerri`, `Enugu`],
    answer: `Aizwal`,
  },
  {
    id: 14,
    question: `What is the capital of Tripura?`,
    options: [`New Delhi`, `Agartala`, `Owerri`, `Enugu`],
    answer: `Agartala`,
  },
]

const tabs = [
  {id: 0, text: '1'},
  {id: 1, text: '2'},
  {id: 2, text: '3'},
  {id: 3, text: '4'},
  {id: 4, text: '5'},
  {id: 5, text: '6'},
  {id: 6, text: '7'},
  {id: 7, text: '8'},
  {id: 8, text: '9'},
  {id: 9, text: '10'},
  {id: 10, text: '11'},
  {id: 11, text: '12'},
  {id: 12, text: '13'},
  {id: 13, text: '14'},
  {id: 14, text: '15'},
]

class Exam extends Component {
  state = {
    index: 1,
    filterQus: quizData[0].question,
    option: quizData[0].options,
    answer: quizData[0].answer,
    total: 0,
    timeElapsedInSeconds: 1800,
    testFinished: false,
    isTimerRunning: true,
    isCheck: false,
    answered: 0,
    ansReview: 0,
  }

  componentDidMount() {
    this.getTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  getTimer = () => {
    this.timeInterval = setInterval(() => {
      this.setState(prev => ({
        timeElapsedInSeconds: prev.timeElapsedInSeconds - 1,
      }))
    }, 1000)
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  displayQus = id => {
    const qus = quizData[id].question
    const op = quizData[id].options
    const ans = quizData[id].answer
    this.setState({filterQus: qus, index: id + 1, option: op, answer: ans})
  }

  previous = () => {
    const {index} = this.state
    const qus = quizData[index].question
    const op = quizData[index].options
    const ans = quizData[index].answer
    this.setState({
      filterQus: qus,
      index: index - 1,
      option: op,
      answer: ans,
      isCheck: false,
    })
  }

  next = () => {
    const {index} = this.state
    const qus = quizData[index].question
    const op = quizData[index].options
    const ans = quizData[index].answer
    this.setState({
      filterQus: qus,
      index: index + 1,
      option: op,
      answer: ans,
      isCheck: false,
    })
  }

  checkAnswer = ans => {
    this.setState(prev => ({answered: prev.answered + 1}))
    const {isCheck} = this.state
    if (isCheck === true) {
      this.setState(prev => ({ansReview: prev.ansReview + 1}))
    }
    const {answer} = this.state
    if (answer === ans) {
      this.setState(prev => ({total: prev.total + 4}))
    } else {
      this.setState(prev => ({total: prev.total - 1}))
    }
  }

  check = () => {
    this.setState(prev => ({isCheck: !prev.isCheck}))
  }

  submit = () => {
    const timer = `${this.renderMinutes()}:${this.renderSeconds()}`
    clearInterval(this.timeInterval)
    this.setState({
      isTimerRunning: false,
      timeElapsedInSeconds: timer,
      testFinished: true,
    })
  }

  render() {
    const {
      index,
      filterQus,
      option,
      total,
      testFinished,
      answered,
      ansReview,
      isTimerRunning,
      timeElapsedInSeconds,
    } = this.state
    const timer = `${this.renderMinutes()}:${this.renderSeconds()}`
    if (timeElapsedInSeconds === 0) {
      clearInterval(this.timeInterval)
      this.setState({
        isTimerRunning: false,
        timeElapsedInSeconds: timer,
        testFinished: true,
      })
    }
    const notAnswered = quizData.length - answered
    const notAnsReview = quizData.length - ansReview

    return (
      <>
        {testFinished ? (
          <div className="result-container">
            <div>
              <h1 className="result-heading">Egnify Grand Test</h1>
              <div className="analyze-container">
                <div className="mark-container">
                  <p className="total-container">
                    <spam className="marks">{total}</spam>/90
                  </p>
                </div>
                <div className="logo">
                  <div className="icon-container">
                    <BiListCheck className="logo1" />
                    <p className="display-result">
                      Marks Scored <span className="g">{total} M</span>
                    </p>
                  </div>
                  <div className="icon-container">
                    <BsCheckCircle className="logo2" />
                    <p className="display-result">
                      Total Marks <span className="v">90 M</span>
                    </p>
                  </div>
                  <div className="icon-container">
                    <RiTimerLine className="logo3" />
                    <p className="display-result">
                      Time Spend
                      <span className="y">{timeElapsedInSeconds} S</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-container">
                <p className="box-model">
                  <span>Subjexts</span>
                  <span>Marks Scored</span>
                </p>
                <div>
                  <p className="subjects">
                    <span className="c">Maths</span>
                    <span className="r">Physics</span>
                    <span className="v">Chemistry</span>
                  </p>
                  <p className="score">
                    <span>{total}</span>
                    <span>{total}</span>
                    <span>{total}</span>
                  </p>
                </div>
              </div>
            </div>
            <AiFillAndroid className="ai-icon" />
          </div>
        ) : (
          <div className="test">
            <div>
              <div className="test-container">
                <h1 className="test-heading">Egnify Grand Text</h1>
                <button
                  type="button"
                  className="submit-button"
                  onClick={this.submit}
                >
                  Submit
                </button>
              </div>
              <div className="type-container">
                <div className="q-container">
                  <p className="q-number">{index}</p>
                  <p className="ans-type">single Answer Type</p>
                </div>
                <div className="review-container">
                  <input
                    type="checkbox"
                    id="review"
                    className="input"
                    onChange={this.check}
                  />
                  <label htmlFor="review" className="input-label">
                    Review Later
                  </label>
                </div>
              </div>
              <p className="question">{filterQus}</p>
              <ul className="un-list">
                {option.map(eachOp => (
                  <li className="op-list" onChange={this.select}>
                    <button
                      type="button"
                      className="select-option"
                      onClick={() => this.checkAnswer(eachOp)}
                    >
                      {eachOp}
                    </button>
                  </li>
                ))}
              </ul>
              <hr className="h-line" />
              <div className="navigate">
                <button
                  type="button"
                  onClick={this.previous}
                  className="prev-button"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={this.next}
                  className="prev-button"
                >
                  Next
                </button>
              </div>
            </div>
            <div className="vl">.</div>
            <div>
              <div className="watch-container">
                <RiTimerLine className="timer-icon" />
                <p className="box">
                  <span className="timer">{timer}</span>
                </p>
              </div>
              <div>
                <div className="count-container">
                  <p className="answer ans">{answered}</p>
                  <p className="text a">Answered</p>
                </div>
                <div className="count-container">
                  <p className="answer review">{notAnswered}</p>
                  <p className="text n"> Not Answered</p>
                </div>
                <div className="count-container">
                  <p className="answer yellow">{ansReview}</p>
                  <p className="text y">Answered & Mark for Review</p>
                </div>
                <div className="count-container">
                  <p className="answer not">{notAnsReview}</p>
                  <p className="text r">Not Answered & Mark for Review</p>
                </div>
                <hr className="p-link" />
                <ul className="unorder-tab">
                  {tabs.map(eachTab => (
                    <Tabs
                      key={eachTab.id}
                      tabDetails={eachTab}
                      displayQus={this.displayQus}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Exam
