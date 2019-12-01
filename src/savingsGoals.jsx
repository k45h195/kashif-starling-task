import React, {useState} from 'react'
import {connect} from 'react-redux'
import './savingsGoals.css'
import {AddMoneyForm} from './add-money-form'
const SavingsGoalsBase = (props) => {

    const [radioboxValue, setRadioboxValue] = useState(null)
    // at the moment will just set up one currency at a time
    const onChange= (e) => console.log(e.target.value) || setRadioboxValue(e.target.value)

    // thunk -  no value passed in
    const getSavingsGoalFromUid = () => props.savingsGoals.savingsGoalList.filter(goal => goal.savingsGoalUid===radioboxValue)

    if(props.savingsGoals.savingsGoalList){
        return(
            <>
            {props.savingsGoals.savingsGoalList.map(goal => 
            <SavingsGoalsDisplay 
                key={goal.savingsGoalUid}
                {...goal}
                onChange={onChange}
                checked={goal.savingsGoalUid === radioboxValue}
            /> )}
            { radioboxValue &&
                <AddMoneyForm savingsGoal={getSavingsGoalFromUid()}/>
            }
            </>

       )
    }
    return null
}


const RadioBox = ({currency, onChange, checked}) =>(
    <div>
        <input 
            type="radio" 
            name={currency} 
            value={currency} 
            onChange={onChange}
            checked={checked}
        />
    </div>
)


const convertPenceToPounds = minorUnits => minorUnits/100

const SavingsGoalsDisplay = (props) => (
    <div className="saivingsRows">
        <RadioBox currency={props.savingsGoalUid} checked={props.checked} onChange={props.onChange}/>
        <p>{props.name}</p>
        <p>{props.target.currency}</p>
        <p>{`£ ${convertPenceToPounds(props.target.minorUnits)}`}</p>
        <p>{props.totalSaved.currency}</p>
        <p>{`£ ${convertPenceToPounds(props.totalSaved.minorUnits)}`}</p>
        <p>{props.savedPercentage}</p>
    </div>
)
// {"18":{"savingsGoalUid":"221de3b0-2e64-428a-a5ab-5177ed0c0e16","name":"Trip to Paris","target":{"currency":"GBP","minorUnits":11223344},"totalSaved":{"currency":"GBP","minorUnits":0},"savedPercentage":0}}
const mapStateToProps =  ({savingsGoals}) => ({savingsGoals})

export const SavingsGoals = connect(mapStateToProps)(SavingsGoalsBase)