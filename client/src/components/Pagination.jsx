import React from 'react'

const Pagination = (props) => {

    return (
        <div className='flex justify-between'>
            <div className='mt-4'>
                <button
                    className='py-2 px-6 bg-black text-white hover:bg-slate-600 duration-200 transition disabled:bg-gray-400'
                    disabled={props.page == 0}
                    onClick={props.onPrev}
                >
                        Prev
                </button>
            </div>
            <div className='mt-4'>
                <button 
                    className='py-2 px-6 bg-black text-white hover:bg-slate-600 duration-200 transition disabled:bg-gray-400'
                    disabled={props.complete}
                    onClick={props.onNext}
                >
                    Next
                </button>
            </div>
        </div>
    )
}

export default Pagination
