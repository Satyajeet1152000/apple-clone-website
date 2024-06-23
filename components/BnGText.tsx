const BnGText = ({ btext, gtext, classname }: { btext: string | undefined, gtext?: string, classname?:any }) => {
    return (
        <h1 className={`${classname} font-semibold text-[1.2em] ml-[10vmin]`}>
            {btext}
            <span className=' text-gray-600'>
                {" "}{gtext}
            </span>
        </h1>

    )
}

export default BnGText