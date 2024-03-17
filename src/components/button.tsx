
export function Button(props: any) {
    return <>
        <button
            className={`${props.btn} align-middle select-none tracking-widest font-bold text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-2 hover:bg-deep-purple-500 hover:text-white hover:border-white hover:border-2 transition-all duration-300 ease-in-out shadow-md`}
    
            onClick={props.onClick}
            >
            {props.children}
          </button>
    </>    
}

export default Button;