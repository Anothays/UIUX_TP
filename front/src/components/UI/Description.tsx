type DescriptionProps = {
    text: string;   
}

export default function Description({ text }: DescriptionProps) {
    return (
        <div className="my-10 px-5">
            <h1 className="text-[25px] text-center">Description</h1>
            <p className="text-[18px] text-left">{text}</p>
        </div>
    )
}