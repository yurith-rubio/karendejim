
export function Button(props: any) {
    return <>
        <button
            color="deep-purple"
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-deep-purple-500 text-white shadow-md shadow-deep-purple-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-2 hover:opacity-[0.85]"
            onClick={props.onClick}
            >
            {props.children}
          </button>
    </>    
}

export default Button;