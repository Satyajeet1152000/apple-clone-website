const ExploreBtn = ({text}:{text:string}) => {
    return (
        <button className='text-white border-black border px-5 py-3 rounded-full bg-black hover:bg-white hover:text-black'>
            {text}
        </button>
    )
}

export default ExploreBtn