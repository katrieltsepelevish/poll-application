import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination';
import Poll from '../components/Poll';
import pollService from '../services/PollService';

const PollPage = () => {
    const [polls, setPolls] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const polls = await pollService.getByPage();

            setPolls(polls.data);
        }

        fetchData();
    }, [])

    const nextPage = async () => {
        const { complete, page } = polls;

        if(!complete) {
            const nextPolls = await pollService.getByPage(page + 1);

            setPolls(nextPolls.data);
        }
    }

    const prevPage = async () => {
        const { page } = polls;

        if(page > 0) {
            const prevPolls = await pollService.getByPage(page - 1);

            setPolls(prevPolls.data);
        }
    }

    if(!polls) return 'Polls does not exist yet.';

    return (polls && 
        (
            <main>
                <div className='grid grid-cols-1 divide-y'>
                    {polls.data.map(poll => <Poll key={poll.title} data={poll} />)}
                </div>
                <Pagination 
                    complete={polls.complete} 
                    page={polls.page} 
                    onNext={() => nextPage()} 
                    onPrev={() => prevPage()} 
                />
            </main>
        )
    )
}

export default PollPage
