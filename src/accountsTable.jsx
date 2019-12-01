import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getSavingsGoal} from './store/middleware'
const AccountsTableBase = (props) => {
    const [checkboxValue, setCheckboxValue] = useState(null)
    // at the moment will just set up one currency at a time
    const onChange= (e) => setCheckboxValue(e.target.value)

    const handlegetSavingsGoal = () => {
        const accountToGetSavingsGoalFor = props.accountDetails.accounts.filter(account => account.currency === checkboxValue)
        props.getSavingsGoal(accountToGetSavingsGoalFor[0].accountUid)
    }
        

    if(props.accountDetails.accounts){
        return(
            <>
            {props.accountDetails.accounts.map(account => <AccountDisplay key={account.accountUid} currency={account.currency} onChange={onChange} checked={account.currency === checkboxValue} /> )}
            <button disabled={!checkboxValue} onClick={handlegetSavingsGoal}>
                Get the spending goals
            </button>
            </>
       )
    }
    return null
    
}

const AccountDisplay = ({currency, onChange, checked}) =>(
    <div>
        <input 
            type="radio" 
            name={currency} 
            value={currency} 
            onChange={onChange}
            checked={checked}
        />
        <p>{currency}</p>
    </div>
)


const mapStateToProps = ({accountDetails}) => ({accountDetails})

const mapDispatchToProps = {
    getSavingsGoal
}

export const AccountsTable = connect(mapStateToProps, mapDispatchToProps)(AccountsTableBase)