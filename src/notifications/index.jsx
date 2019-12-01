import React from 'react'
import {connect} from 'react-redux'

const NotificationsBase = (props) => {
    return (
    <div>{props.errorDetails.error_description}</div>
    )
}

const mapStateToProps = ({ errorDetails }) => ({ errorDetails})

export const Notifications = connect(mapStateToProps)(NotificationsBase)