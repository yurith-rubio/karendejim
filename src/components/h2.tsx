interface IH2{
    children: string;
    class?: string;
}
export function Htwo(props: IH2) {
    return <h2 className="mb-2 pb-5 pt-10 text-deep-purple-500 abril-fatface text-4xl" >
        {props.children}
    </h2>
}

export default Htwo;