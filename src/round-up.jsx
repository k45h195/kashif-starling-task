import React from 'react'
import {connect} from 'react-redux'
import {getRoundUp} from './store/middleware'

const RoundUpbase = (props) => {

    const handleGetRoundUp = () => props.getRoundUp()
    return <button disabled onClick={handleGetRoundUp}>Get round up</button>
}

const mapStateToProps = ({accountDetails, selectedAccount}) => ({accountDetails, selectedAccount})

const mapDispatchToProps = {
    getRoundUp
}

export const RoundUP = connect(mapStateToProps, mapDispatchToProps)(RoundUpbase)
