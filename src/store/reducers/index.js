import {SET_ACCOUNT_DETAILS, SET_SPENDING_DETAILS, SET_SAVINGS_GOAL, ERROR, SET_SELECTED_ACCOUNT, ROUND_UP} from '../actions'

const initialState = {
    accountDetails : [],
    spendingDetails: [{}],
    savingsGoals: [],
    errorDetails: {},
    selectedAccount: {},
    roundUp: {}
}

// action creater for selected account
export const setSelectedAccount = (payload) => ({type: SET_SELECTED_ACCOUNT, payload})

const accountInfo = (state = initialState, action) =>  {
    switch (action.type) {
      case SET_ACCOUNT_DETAILS:
        return {... state, accountDetails: action.payload}
      case SET_SPENDING_DETAILS:
          return {...state, spendingDetails: action.payload.feedItems}
      case SET_SAVINGS_GOAL:
          return {...state, savingsGoals: action.payload}
      case SET_SELECTED_ACCOUNT:
            return {...state, selectedAccount: action.payload}
      case ROUND_UP:
            return {...state, roundUp: action.payload}
      case ERROR:
          return {...state, errorDetails: action.payload}
      default:
        return state
    }
}

export {accountInfo}