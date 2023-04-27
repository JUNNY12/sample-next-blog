export const Card = ({ children, ...rest }) => {
    return (
        <article className="p-4 mb-8 shadow-md rounded-md
         shadow-slate-400 text-center bg-white h-[25em] w-[20em]
         mobileM:w-[18em]
         transition-all duration-300 ease-in-out
         hover:scale-105
         ">
            {children}
        </article>
    )
}