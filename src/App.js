import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getAccountDetails } from './store/middleware'
import { ButtonsSections } from './buttonsSections'
import { Table } from './table'
import {AccountsTable} from './accountsTable'
import {SavingsGoalsFormBase, SavingsGoalsForm} from './savings-goal-form'
import {Notifications} from './notifications'
import {SavingsGoals} from './savingsGoals'

function AppBase(props) {
  useEffect(() => {
    // Update the document title using the browser API
    props.getAccountDetails()
  }, []);
  return (
    <>
      <Notifications />
      <ButtonsSections />
      <AccountsTable />
      {/* <SavingsGoalsForm /> */}
      {/* <Table /> */}
      <SavingsGoals />
    </>
  );
}


const mapDispatchToProps = {
  getAccountDetails,
}

const App = connect(null, mapDispatchToProps)(AppBase)

export default App;
