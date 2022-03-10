import React from 'react'

export default function Alerts(props) {
    return (
        <div class={`alert ${props.theme} alert-dismissible fade show`} role="alert">
            <strong>{props.title}</strong> {props.desc}
        </div>
    )
}
