interface MyComponentProps {
    text: string; 
    className: string; 
  }

const Heading: React.FC<MyComponentProps> = ({text, className}) => {
    return (
        <h1 className='text-7xl font-semibold py-2'>
            <span className={`bg-gradient-to-r bg-clip-text text-transparent ${className}`}>
                {text}
            </span>
        </h1>
    )
}

export default Heading