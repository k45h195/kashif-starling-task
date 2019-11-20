import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import {getAccountDetails, getSpending, getSavingsGoal} from './store/middleware'
function AppBase(props) {


  console.log("props",props)
  useEffect(() => {
    // Update the document title using the browser API
    props.getAccountDetails()
    props.getSavingsGoal()
  }, []);
  return (
    <div className="App">
      <button onClick={props.getSpending}>Get your spending</button>
    </div>
  );
}

const mapStateToProps = state => state
const mapDispatchToProps = {
  getAccountDetails,
  getSpending,
  getSavingsGoal  
}
const App = connect(mapStateToProps, mapDispatchToProps)(AppBase)

export default App;
