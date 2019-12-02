import React, {useState} from 'react'
import {connect} from 'react-redux'
import "./form.css"
import {addMoney} from './store/middleware' 
const uuidv4 = require('uuid/v4');
const initialValues = { savingsPotName: "", savingsPotTarget: "" }

    const contructBody = (currency, minorUnits) => ({
            amount: {
              currency,
              minorUnits
            }
    })

  const AddMoneyFormBase = props => {
      const [savingsValue, setSavingsValue] = useState(0)
      const handleOnChange = e => console.log(e.target.value) || setSavingsValue(e.target.value)
      // accountUid, savingsGoalUid, transferUid, body
        const handleAddMoney = () => props.addMoney(props.savingsGoal[0].savingsGoalUid, uuidv4(), contructBody(props.savingsGoal[0].target.currency, savingsValue))
        return(
            <div className="container">
            <label>{props.savingsGoal[0].name}</label>
              <label>Amount to transfer in pence</label>
              <input
                  id="savingsPotTarget"
                  name="savingsPotTarget"
                  type="number" min="1" step="1" max="1000000"
                  onChange={handleOnChange}
                  value={savingsValue}
              />
              <button disabled={savingsValue<=0} type="submit" onClick={handleAddMoney}>
                  Submit
            </button>
            </div>
        )
             
  };


const mapStateToProps = ({accountDetails}) => ({accountDetails})

const mapDispatchToProps = {
    addMoney
}

export const AddMoneyForm = connect(mapStateToProps, mapDispatchToProps)(AddMoneyFormBase)