import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Exam from './components/Exam'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/exam" component={Exam} />
  </Switch>
)

export default App
