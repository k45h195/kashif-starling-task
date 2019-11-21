import React from 'react'
import { connect } from 'react-redux'
import { getAccountDetails, getSpending, getSavingsGoal, getRoundUpGoal, putRoundGoal, putSavingsGoals } from './store/middleware'
const ButtonsSectionsBase = (props) => {
  const { accountUid, defaultCategory } = props.accountDetails.accounts ? props.accountDetails.accounts[0] : { accountUid: null, defaultCategory: null }
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

  const handleSetUpSavingsGoal = () => {
    const body = {
      "name": "Trip to Paris",
      "currency": "GBP",
      "target": {
        "currency": "GBP",
        "minorUnits": 11223344
      },
      "base64EncodedPhoto": "string"
    }
    props.putSavingsGoals(accountUid, body)
  }

  return (
    <>
      <button onClick={handleGetSpending} disabled={!accountUid}>Get your spending</button>
      <button onClick={handleGetRoundUp} disabled={!accountUid}>Get your round up figure</button>
      <button onClick={handleSetUpRoundUp} disabled={!accountUid}>Set round up thing</button>
      <button onClick={handleSetUpSavingsGoal} disabled={!accountUid}>Create savings goal</button>
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
  putSavingsGoals
}

const ButtonsSections = connect(mapStateToProps, mapDispatchToProps)(ButtonsSectionsBase)

export { ButtonsSections }

