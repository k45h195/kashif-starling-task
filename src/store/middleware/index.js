
import { SET_ACCOUNT_DETAILS, SET_SPENDING_DETAILS, SET_SAVINGS_GOAL, ERROR } from '../actions'
import nodeFetch from 'node-fetch'

export const getController = async (endpoint) => {
    const response = await nodeFetch(`http://localhost:7000${endpoint}`, {
        method: 'get'
    })

    return await response.json()
}

export const putController =  async(endpoint, body) => {
    const response = await nodeFetch(`http://localhost:7000${endpoint}`,{
        method: 'put',
        body
    })
    return await response.json()
}
export const getAccountDetails = () => {
    return dispatch => {
        getController("/")
            .then(payload =>{
                if(payload.error){
                    return dispatch({ type: ERROR, payload })
                }
                return dispatch({ type: SET_ACCOUNT_DETAILS, payload })
            })
            .catch(err => console.log(`got an error ${err}`))
    }
}

export const getSpending = (accountUid, categoryUid) => {
    return (dispatch) => {
        getController(`/spending?accountUid=${accountUid}&categoryUid=${categoryUid}`)
            .then(payload => dispatch({ type: SET_SPENDING_DETAILS, payload }))
            .catch(err => console.log(`got an error ${err}`))
    }
}

export const getSavingsGoal = (accountUid) => {
    console.log("gteeeee", accountUid)
    return (dispatch, getState) => {
        // what if you have more than one savings account
        getController(`/savings-goals?accountUid=${accountUid}`)
            .then(res => res)
            .then(payload => dispatch({ type: SET_SAVINGS_GOAL, payload }))
            .catch(err => console.log(`got an error ${err}`))
    }
}



export const createSavingsGoals = (accountUid, bodyInfo) => {
    const body = {
        name: bodyInfo.name,
        currency: "GBP",
        target :{
            currency : "GBP",
            minorUnits: bodyInfo.target
        }
    }
    return (dispatch) => {
        putController(`/savings-goals?accountUid=${accountUid}`, body)
            .then(res => JSON.parse(res))
            .then(payload => console.log("Hey the savings goals has been set up", payload))
            .catch(err => console.log(`got an error ${err}`))
    }
}

export const addMoney = ( accountUid, savingsGoalUid, transferUid, body) => {
    return dispatch => {
        putController(`/add-money?accountUid=${accountUid}&savingsGoal=${savingsGoalUid}&transferUid=${transferUid}`, body)
            .then(payload => console.log("Hey the savings goals has been set up", payload))
            .catch(err => console.log(`got an error ${err}`))
    }
}