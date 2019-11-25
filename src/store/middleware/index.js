
import { SET_ACCOUNT_DETAILS, SET_SPENDING_DETAILS, SET_SAVINGS_GOAL } from '../actions'
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
            .then(res => JSON.parse(res))
            .then(payload => dispatch({ type: SET_ACCOUNT_DETAILS, payload }))
            .catch(err => console.log(`got an error ${err}`))
    }
}

export const getSpending = (accountUid, categoryUid) => {
    return (dispatch) => {
        getController(`/spending?accountUid=${accountUid}&categoryUid=${categoryUid}`)
            .then(res => JSON.parse(res))
            .then(payload => console.log(payload) || dispatch({ type: SET_SPENDING_DETAILS, payload }))
            .catch(err => console.log(`got an error ${err}`))
    }
}

export const getSavingsGoal = () => {
    return dispatch => {
        getController(`/savings-goals`)
            .then(res => JSON.parse(res))
            .then(payload => dispatch({ type: SET_SAVINGS_GOAL, payload }))
            .catch(err => console.log(`got an error ${err}`))
    }
}

export const getRoundUpGoal = (accountUid) => {
    console.log("accountUid", accountUid)
    return dispatch => {
        getController(`/round-up?accountUid=${accountUid}`)
            .then(res => JSON.parse(res))
            .then(payload => console.log("Hey got something"))
            .catch(err => console.log(`got an error ${err}`))
    }
}

export const putRoundGoal  = (accountUid, body) => {
    return dispatch => {
        putController(`/round-up?accountUid=${accountUid}`, JSON.stringify(body))
            .then(res => JSON.parse(res))
            .then(payload => console.log("Hey got something", payload))
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
    return dispatch => {
        putController(`/savings-goals?accountUid=${accountUid}`, body)
            .then(res => JSON.parse(res))
            .then(payload => console.log("Hey the savings goals has been set up", payload))
            .catch(err => console.log(`got an error ${err}`))
    }
}