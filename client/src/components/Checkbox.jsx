import React from 'react'

const Checkbox = (props) => {

    const { option, vote } = props.option;

    return (
        <label className='my-1 block'>
            <input type="radio" className='mr-2' name={props.name} value={option} checked={props.checked} />
            <span>{option} (<b>{vote}</b> votes so far!)</span>
        </label>
    )
}

export default Checkbox
