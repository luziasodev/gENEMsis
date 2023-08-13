import './Collection.css'

function Collection({ handleClick, children }) {
    return <div onClick={handleClick} className={`collection`}>{children}</div>;
}

export default Collection;