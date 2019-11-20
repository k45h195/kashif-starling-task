import {SET_ACCOUNT_DETAILS, SET_SPENDING_DETAILS, SET_SAVINGS_GOAL} from '../actions'

const initialState = {
    accountDetails : {},
    spendingDetails: {},
    savingsGoals: {},

}

const accountInfo = (state = initialState, action) =>  {
    switch (action.type) {
      case SET_ACCOUNT_DETAILS:
        return {... state, accountDetails: action.payload}
      case SET_SPENDING_DETAILS:
          return {...state, spendingDetails: action.payload}
      case SET_SAVINGS_GOAL:
          return {...state, savingsGoals: action.payload}
      default:
        return state
    }
}

export {accountInfo}