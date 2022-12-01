import React from 'react'

export default function SideItem(props)
{
    const {
        name,
        handleClick,
        active
    } = props
    return (
        <button
            className={`side-item ${active ? 'active' : ''}`}
            onClick={handleClick}>
            {name}
        </button>
    )
}