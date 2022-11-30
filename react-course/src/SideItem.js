import React from 'react'

export default function SideItem(props)
{
    const {
        option,
        handleClick,
        active
    } = props
    return (
        <button
            className={`side-item ${active ? 'active' : ''}`}
            onClick={handleClick}>
            {option.name}
        </button>
    )
}