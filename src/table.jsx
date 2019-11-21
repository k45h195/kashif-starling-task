import React from 'react'
import ReactTable from 'react-table'
import {connect} from 'react-redux'


const columns = [{
    Header: 'Source',
    accessor: 'source' // String-based value accessors!
  },
  {
      Header: 'Time',
      accessor: 'transactionTime'
  },{
      Header: 'Amount',
      accessor: 'amount.minorUnits'
  }
]


const TableBase = (props) => {
    return(
        <ReactTable
        data={props.spendingDetails}
        columns={columns}
    />
    )
}

const mapStateToProps = ({spendingDetails}) => ({spendingDetails})

export const Table = connect(mapStateToProps)(TableBase)