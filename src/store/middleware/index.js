
import { SET_ACCOUNT_DETAILS, SET_SPENDING_DETAILS, SET_SAVINGS_GOAL } from '../actions'
import nodeFetch from 'node-fetch'
const headers = {
    'Content-Type': 'application/json',
    "Accept": "application/json",
    "User-Agent": "test",
    "Authorization": "Bearer eyJhbGciOiJQUzI1NiJ9.eyJpc3MiOiJhcGktZGVtby5zdGFybGluZ2JhbmsuY29tIiwic3ViIjoiYTU1MDNlYmQtMjdkYS00NGI5LTk3OTYtMjc0MDcwMTQ1Y2Y2IiwiZXhwIjoxNTc0Mzc0MDAzLCJpYXQiOjE1NzQyODc2MDMsInNjb3BlIjoiYWNjb3VudC1ob2xkZXItbmFtZTpyZWFkIGFjY291bnQtaG9sZGVyLXR5cGU6cmVhZCBhY2NvdW50LWlkZW50aWZpZXI6cmVhZCBhY2NvdW50LWxpc3Q6cmVhZCBhY2NvdW50OnJlYWQgYWRkcmVzczplZGl0IGFkZHJlc3M6cmVhZCBhdHRhY2htZW50OnJlYWQgYXR0YWNobWVudDp3cml0ZSBhdXRob3Jpc2luZy1pbmRpdmlkdWFsOnJlYWQgYmFsYW5jZTpyZWFkIGNhcmQtY29udHJvbDplZGl0IGNhcmQ6cmVhZCBjb25maXJtYXRpb24tb2YtZnVuZHM6cmVhZCBjdXN0b21lcjpyZWFkIGVtYWlsOmVkaXQgbWFuZGF0ZTpkZWxldGUgbWFuZGF0ZTpyZWFkIG1hcmtldGluZy1wcmVmZXJlbmNlczpyZWFkIG1hcmtldGluZy1wcmVmZXJlbmNlczp3cml0ZSBtZXJjaGFudDpyZWFkIG1ldGFkYXRhOmNyZWF0ZSBtZXRhZGF0YTplZGl0IHBheWVlOmNyZWF0ZSBwYXllZTpkZWxldGUgcGF5ZWU6ZWRpdCBwYXllZS1pbWFnZTpyZWFkIHBheWVlOnJlYWQgcGF5LWxvY2FsOmNyZWF0ZSBwYXktbG9jYWwtb25jZTpjcmVhdGUgcGF5LWxvY2FsOnJlYWQgcHJvZmlsZS1pbWFnZTplZGl0IHByb2ZpbGUtaW1hZ2U6cmVhZCByZWNlaXB0OnJlYWQgcmVjZWlwdHM6cmVhZCByZWNlaXB0OndyaXRlIHNhdmluZ3MtZ29hbDpjcmVhdGUgc2F2aW5ncy1nb2FsOmRlbGV0ZSBzYXZpbmdzLWdvYWw6cmVhZCBzYXZpbmdzLWdvYWwtdHJhbnNmZXI6Y3JlYXRlIHNhdmluZ3MtZ29hbC10cmFuc2ZlcjpkZWxldGUgc2F2aW5ncy1nb2FsLXRyYW5zZmVyOnJlYWQgc3RhbmRpbmctb3JkZXI6Y3JlYXRlIHN0YW5kaW5nLW9yZGVyOmRlbGV0ZSBzdGFuZGluZy1vcmRlcjpyZWFkIHN0YXRlbWVudC1jc3Y6cmVhZCBzdGF0ZW1lbnQtcGRmOnJlYWQgdHJhbnNhY3Rpb246ZWRpdCB0cmFuc2FjdGlvbjpyZWFkIiwiYWNjb3VudEhvbGRlclVpZCI6IjY5ZjhhYmExLWZjOTUtNDRmZC1iNWExLTE3YjZiN2I3NjRkYyIsInRva2VuVWlkIjoiNWNhZTM5MTYtMjZlNy00YmY1LWI2YzYtYWJkMTk0NWMyNDVjIiwiYXBpQWNjZXNzVWlkIjoiYmY2ZmZlZDMtMTM2NC00NGJiLTkzZWItYWVmNWYxOThmODhmIn0.rJAU5a-gXOr8Myc3-YzY3trwec1RQQiESEAwqEqI8ruiYbZFMb_s4etAAf604LUKpybnSdp5LClFef-eKQgdIE76nGKPrMeCSV2kqQh4yTCkzdYEwDA3gBhNRhuqYBTUztoidKSFtf_HGTawDtYtaL5ufmiT29naV9jK6u0oKRS8bNHSPjJKHJTn7O_bWj9fTFvkEMM8rV0WlpRbwxhwByfsdeYf4OlzJeM3FmoemJdvc6DI8oZc2ILwgPAWFvu2LUP7v1NSia9U9Ph-E4n6tsY9Ysilx1qUz3v7hpiipYpRgfKsIziy6MN89tCRgvorSgRw_fIIlek0uBE5FCKKBmChIBVvczIb-j6N7Rm7Smiel8LboNjF1XlpOnWQcAez-E9sdEGhGAKZTl72-jhYfdn0mIJLFvF63gvSHAMf2pj3mZZ8TO34qeQnd8AeMYNIw2MAN02Fl7jxaMvoj_bWp3ruevtu0KOJvd8OVGOae9uNDNoKeFvLP0tj986N8ArZwZiBGV_tMwEaM_rK853w1VrDA50LnNwKXNWQRFPDYU-P80p42fBS2jaJDjvAWdn1oT2JUEcRhYD_Ofuj5GRZ0lVLnUyeKdtQyraWeR-7HzcXXf-iljAOtg4aH2-CGla7AqjuEajWDbzcpwrQiXvKcKKLVT1Xrd9Cc_zNns0KuIo"
}


export const getAccountDetailsCall = async (headers) => {
    const response = await nodeFetch('http://localhost:7000', {
        method: 'get'
    })

    return await response.json()
}

export const getSpendingDetails = async (accountUid, categoryUid) => {
    const response = await nodeFetch(`http://localhost:7000/spending?accountUid=${accountUid}&categoryUid=${categoryUid}`, {
        method: 'get'
    })

    return await response.json()
}

export const getSavingsDetails = async () => {
    const response = await nodeFetch(`http://localhost:7000/savingsgoal`, {
        method: 'get'
    })

    return await response.json()
}


export const getAccountDetails = () => {
    return dispatch => {
        getAccountDetailsCall(headers)
            .then(res => JSON.parse(res))
            .then(payload => dispatch({ type: SET_ACCOUNT_DETAILS, payload }))
            .catch(err => console.log(`got an error ${err}`))
    }
}

export const getSpending = (accountUid, categoryUid) => {
    return dispatch => {
        getSpendingDetails("kashif333", "iqbal444")
            .then(res => console.log("res", res) || JSON.parse(res))
            .then(payload => dispatch({ type: SET_SPENDING_DETAILS, payload }))
            .catch(err => console.log(`got an error ${err}`))
    }
}

export const getSavingsGoal = () => {
    return dispatch => {
        getSavingsDetails()
            .then(res => console.log(res) || JSON.parse(res))
            .then(payload => dispatch({ type: SET_SAVINGS_GOAL, payload }))
            .catch(err => console.log(`got an error ${err}`))
    }
}