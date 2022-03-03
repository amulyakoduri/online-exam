
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BsCalendar} from 'react-icons/bs'
import {
  AiOutlineQuestionCircle,
  AiFillAndroid,
  AiFillCalculator,
  AiOutlineDeleteColumn,
} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import {MdTimelapse} from 'react-icons/md'

import './index.css'

class Home extends Component {
  state = {
    isCheked: false,
    isSyllabus: true,
    isInstructions: false,
    isMarking: false,
  }

  syllabus = () =>
    this.setState({isSyllabus: true, isInstructions: false, isMarking: false})

  instructions = () =>
    this.setState({isInstructions: true, isSyllabus: false, isMarking: false})

  marking = () =>
    this.setState({isMarking: true, isSyllabus: false, isInstructions: false})

  checked = () => {
    this.setState(prev => ({isCheked: !prev.isCheked}))
  }

  render() {
    const {isCheked, isSyllabus, isInstructions, isMarking} = this.state
    const enableSyllabus = isSyllabus ? 'button active' : 'button'
    const enableMarking = isMarking ? 'button active' : 'button'
    const enableInstructions = isInstructions ? 'button active' : 'button'

    return (
      <>
        <div className="home-container">
          <div className="home-heading-container">
            <h1 className="heading">Egnify Grand Test</h1>
            <div className="time-container">
              <BsCalendar className="icon" />
              <p className="time">27 Nov -10:00 am to 27 Nov 2020 - 12pm</p>
            </div>
          </div>
          <div className="exam-details-container">
            <div className="exam-container">
              <div className="qus-container">
                <AiOutlineQuestionCircle className="icons" />
                <p className="text">40 Q</p>
              </div>
              <div className="marks-container">
                <MdTimelapse className="icons" />
                <p className="text">90 M</p>
              </div>
              <div className="timer-container">
                <BiTimeFive className="icons" />
                <p className="text">180 min </p>
              </div>
            </div>
            <div>
              <AiFillAndroid className="android" />
            </div>
          </div>

          <ul className="tabs-list">
            <li>
              <button
                type="button"
                onClick={this.syllabus}
                className={enableSyllabus}
              >
                Syllabus
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={this.marking}
                className={enableMarking}
              >
                Marking Schema
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={this.instructions}
                className={enableInstructions}
              >
                Instructions
              </button>
            </li>
          </ul>
          <hr className="line1" />
          {isSyllabus && (
            <div>
              <div>
                <div className="syllabus-container">
                  <AiFillCalculator className="calculator" />
                  <h1 className="math">Maths</h1>
                </div>
                <ul className="math-container">
                  <li className="math1">Quadratric equations</li>
                  <li className="math1">Trignomentry</li>
                </ul>
              </div>
              <div>
                <div className="syllabus-container">
                  <AiOutlineDeleteColumn className="calculator" />
                  <h1 className="physics">Physics</h1>
                </div>
                <ul className="phy-list">
                  <li className="physics1">kinematics</li>
                </ul>
              </div>
            </div>
          )}
          {isInstructions && (
            <div>
              <h1 className="instruction-heading">
                Instruction to the candidates
              </h1>
              <ul className="list-instructions">
                <li>
                  The examination does not require pen, pencil and calculator
                </li>
                <li>
                  Every student will take the examination on a
                  Laptop/DeskTop/Smart Phone
                </li>
                <li>
                  On Computer screen every student will be given objective type
                  type Multiple Choice Questions(MCQs).
                </li>
                <li>
                  Each student will get the questions and answers in different
                  order selected randomly from a fixed Question Databank.
                </li>
                <li>
                  The student need to click on the right choice/Correct option
                  from the multiple choices/option given with each question. For
                  Multiple Choice Questions,each question has four options,and
                  candidate has to click the appropriate.
                </li>
              </ul>
            </div>
          )}
          {isMarking && (
            <div>
              <div>
                <h1 className="mark-heading">Single Answer Type:</h1>
                <ul>
                  <li className="mark-list">
                    Correct Answer: <span className="g">+4</span>
                  </li>
                  <li className="mark-list">
                    Wrong Answer: <span className="r"> -1</span>
                  </li>
                  <li className="mark-list">
                    Not Answered: <span className="n">0</span>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="mark-heading">Multiple Answer Type:</h1>
                <ul>
                  <li className="mark-list">
                    Correct Answer: <span className="g">+4</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <hr className="line" />
          <div className="container">
            <div className="checkbox-container">
              <input
                type="checkbox"
                onChange={this.checked}
                className="checkbox"
                id="c"
              />
              <label htmlFor="c" className="checkbox-label">
                I accept the instructions
              </label>
            </div>
            {isCheked ? (
              <button type="button" className="start">
                <Link to="/exam" className="a">
                  START EXAM
                </Link>
              </button>
            ) : (
              <button type="button" className="start">
                START EXAM
              </button>
            )}
          </div>
        </div>
      </>
    )
  }
}

export default Home
