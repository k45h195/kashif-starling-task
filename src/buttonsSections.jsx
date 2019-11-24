import React from 'react'
import { connect } from 'react-redux'
import { 
    getAccountDetails, 
    getSpending, 
    getSavingsGoal, 
    getRoundUpGoal, 
    putRoundGoal, 
    putSavingsGoals, 
    createSavingsGoals
  } from './store/middleware'
const ButtonsSectionsBase = (props) => {
  
  const { accountUid, defaultCategory } = props.accountDetails.accounts ? props.accountDetails.accounts[0] : { accountUid: null, defaultCategory: null }
  console.log(accountUid)
  const handleGetSpending = () => {

    props.getSpending(accountUid, defaultCategory)
  }

  const handleGetRoundUp = () => {
    props.getRoundUpGoal(accountUid)
  }

  const handleSetUpRoundUp = () => {
    const body = {
      "roundUpGoalUid": "77887788-7788-7788-7788-778877887788",
      "roundUpMultiplier": 2
    }
    props.putSavingsGoals(accountUid, body)
  }

  const handleCreateSavingsGoal = () => {
    const body = {
      "name": "Trip to Paris",
      "currency": "GBP",
      "target": {
        "currency": "GBP",
        "minorUnits": 11223344
      },
      "base64EncodedPhoto": "string"
    }
    props.createSavingsGoals(accountUid, body)
  }

  return (
    <>
      <button onClick={handleGetSpending} disabled={!accountUid}>Get your spending</button>
      <button onClick={() =>{}} disabled={!accountUid}>Get savings goals</button>
      <button onClick={handleCreateSavingsGoal} disabled={!accountUid}>Create savings goal</button>
    </>
  )

}

const mapStateToProps = ({ accountDetails }) => ({ accountDetails })
const mapDispatchToProps = {
  getAccountDetails,
  getSpending,
  getSavingsGoal,
  getRoundUpGoal,
  putRoundGoal,
  putSavingsGoals,
  createSavingsGoals
}

const ButtonsSections = connect(mapStateToProps, mapDispatchToProps)(ButtonsSectionsBase)

export { ButtonsSections }

