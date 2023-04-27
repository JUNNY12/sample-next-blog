export const Flex = ({ children}) => {
    return (
        <div className="flex items-center justify-center flex-wrap gap-x-8 h-fit">
            {children}
        </div>
    )
}