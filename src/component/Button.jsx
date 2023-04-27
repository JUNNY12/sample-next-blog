
export const Button = ({ children}) => {
    return (
        <button 
        onClick={(event) => (event.target.innerText += "🚀") }
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {children? children : "Click Me"} 
        </button>
    )
}