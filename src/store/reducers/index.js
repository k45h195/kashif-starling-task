import {SET_ACCOUNT_DETAILS, SET_SPENDING_DETAILS, SET_SAVINGS_GOAL, ERROR} from '../actions'

const initialState = {
    accountDetails : [],
    spendingDetails: [{}],
    savingsGoals: [],
    errorDetails: {}
}

const accountInfo = (state = initialState, action) =>  {
    switch (action.type) {
      case SET_ACCOUNT_DETAILS:
        return {... state, accountDetails: action.payload}
      case SET_SPENDING_DETAILS:
          return {...state, spendingDetails: action.payload.feedItems}
      case SET_SAVINGS_GOAL:
          return {...state, savingsGoals: action.payload}
      case ERROR:
          return {...state, errorDetails: {...action.payload}}
      default:
        return state
    }
}

export {accountInfo}