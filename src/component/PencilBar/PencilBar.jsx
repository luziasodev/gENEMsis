import './PencilBar.css'

function PencilBar({ children }) {
    return <div className='pencil' >
    <div>{children}</div>
    <div className='top' />
    </div>;
}

export default PencilBar;