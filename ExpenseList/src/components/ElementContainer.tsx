type ElementContainerProps = {
    children?: React.ReactNode
}
const ElementContainer: React.FC<ElementContainerProps> = ({ children }) => {
    return (<div className="body-content">
        {children}
    </div>);
}

export default ElementContainer;