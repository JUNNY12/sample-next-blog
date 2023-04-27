
const Typography = ({ children, variant, ...rest }) => {

    const Component = `h${variant}`;
    
    return (
        <Component {...rest}>
            {children}
        </Component>
    )
};

export default Typography;