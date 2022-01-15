import React, { useEffect, useState, useRef } from 'react'
import pollService from '../services/PollService';
import Checkbox from './Checkbox';

const Poll = (props) => {
    const [poll, setPoll] = useState(null);
    const voteButton = useRef(null);

    useEffect(() => {
        setPoll(props.data);
    }, [props.data]);

    const handleVote = async (evt) => {
        evt.preventDefault();

        const { _id } = poll;
        const option = evt.target[poll.title].value;

        const votedPoll = await pollService.vote(_id, option);

        setPoll(votedPoll.data);

        voteButton.current.disabled = true;
    }

    return (poll && 
        (
            <div className='py-3'>
                <h2 className='font-semibold mb-2'>{poll.title}</h2>
                <form onSubmit={handleVote}>
                    {poll.options.map((option, index) => <Checkbox key={index} name={poll.title} option={option} />)}
                    <button type='submit' ref={voteButton} className='mt-2 py-2 px-6 bg-black text-white hover:bg-slate-600 duration-200 transition disabled:bg-gray-400'>
                        Submit Vote
                    </button>
                </form>
            </div>
        )
    )
}

export default Poll
