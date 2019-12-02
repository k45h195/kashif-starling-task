import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getSavingsGoal} from './store/middleware'
import {setSelectedAccount} from './store/reducers'
import {RoundUP} from './round-up'
const AccountsTableBase = (props) => {

    const getAccountFromCurrency = (currency) => props.accountDetails.accounts.filter(account => account.currency === currency)[0]

    const [checkboxValue, setCheckboxValue] = useState(null)
    // at the moment will just set up one currency at a time
    const onChange= (e) => {
        setCheckboxValue(e.target.value)
        const account = getAccountFromCurrency(e.target.value)
        props.setSelectedAccount(account)
    }

    const handlegetSavingsGoal = () => {
        const accountToGetSavingsGoalFor = getAccountFromCurrency(checkboxValue)
        props.getSavingsGoal(accountToGetSavingsGoalFor.accountUid)
    }
        

    if(props.accountDetails.accounts){
        return(
            <>
            {props.accountDetails.accounts.map(account => <AccountDisplay key={account.accountUid} currency={account.currency} onChange={onChange} checked={account.currency === checkboxValue} /> )}
            <button disabled={!checkboxValue} onClick={handlegetSavingsGoal}>
                Get the spending goals
            </button>
            <RoundUP/>
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
    getSavingsGoal,
    setSelectedAccount
}

export const AccountsTable = connect(mapStateToProps, mapDispatchToProps)(AccountsTableBase)