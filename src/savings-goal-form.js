import React from 'react'
import { Formik } from 'formik'
import {connect} from 'react-redux'
import "./form.css"
import {createSavingsGoals} from './store/middleware' 
const initialValues = { savingsPotName: "", savingsPotTarget: "" }

const SavingsGoalsFormBase = props => {
    console.log("props", props.accountDetails.accounts && props.accountDetails.accounts[0].accountUid)
    return (
      <Formik initialValues={initialValues} onSubmit={() =>{}} enableReinitialize>
        {(props) => {
          return  <form onSubmit={props.handleSubmit}>
          <div className="container">
              <label>Name of savings pot</label>
              <input
                  id="savingsPotName"
                  name="savingsPotName"
                  type="text"
                  onChange={props.handleChange}
                  onBlur={null}
                  value={props.values.savingsPotName}
              />
              <label>Target Amount</label>
              <input
                  id="savingsPotTarget"
                  name="savingsPotTarget"
                  type="number" min="1" step="1" max="1000000"
                  onChange={props.handleChange}
                  onBlur={null}
                  value={props.values.savingsPotTarget}
              />
              <button type="submit" disabled={props.isSubmitting} onClick={() => createSavingsGoals("b25a32c3-3bbe-4a58-bd1d-1e141db27fe1", {name:props.values.savingsPotName, target: props.values.savingsPotTarget})}>
                  Submit
            </button>
          </div>
      </form>;
        }}
      </Formik>
    );
  };

const mapStateToProps = ({accountDetails}) => ({accountDetails})

const mapDispatchToProps = {
    createSavingsGoals
}

const SavingsGoalsForm = connect(mapStateToProps, mapDispatchToProps)(SavingsGoalsFormBase)
export {SavingsGoalsForm }