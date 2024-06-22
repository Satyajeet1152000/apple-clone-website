const Button = ({text}:{text:string}) => {
    return (
        <button className='text-white text-[.8em] border-black border px-[.8em] py-[.5em] rounded-full bg-black hover:bg-white hover:text-black'>
            {text}
        </button>
    )
}

export default Button