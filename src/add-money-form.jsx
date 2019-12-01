import React from 'react'
import {connect} from 'react-redux'
import "./form.css"
import {addMoney} from './store/middleware' 
const initialValues = { savingsPotName: "", savingsPotTarget: "" }

    const contructBody = (currency, minorUnits) => ({
            amount: {
              currency,
              minorUnits
            }
    })

  const AddMoneyFormBase = props => {
        const handleAddMoney = () => addMoney()
        return(
            <div className="container">
            <label>{props.savingsGoal[0].name}</label>
              <label>Target Amount</label>
              <input
                  id="savingsPotTarget"
                  name="savingsPotTarget"
                  type="number" min="1" step="1" max="1000000"
                  onChange={() => {}}
                  onBlur={null}
                  value={""}
              />
              <button type="submit"  onClick={()=>{}}>
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