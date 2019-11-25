import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getAccountDetails } from './store/middleware'
import { ButtonsSections } from './buttonsSections'
import { Table } from './table'
import {SavingsGoalsFormBase, SavingsGoalsForm} from './savings-goal-form'

function AppBase(props) {
  console.log("props", props)
  useEffect(() => {
    // Update the document title using the browser API
    props.getAccountDetails()
  }, []);
  return (
    <>
      <ButtonsSections />
      <SavingsGoalsForm />
    </>
  );
}


const mapDispatchToProps = {
  getAccountDetails,
}

const App = connect(null, mapDispatchToProps)(AppBase)

export default App;
