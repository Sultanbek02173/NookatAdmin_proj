import './navigations.scss';

export const Navigations = ({list, selected, setSelected}) => {
    return (
        <aside className="nav-container">
            {list.map((item) => (
            <button
                onClick={()=>{
                setSelected(item.id)
                
                }}
                key={item.id} 
                className="nav-element" 
                style={{
                backgroundColor: item.id == selected ? 'rgba(34, 125, 165, 1)' : 'rgba(230, 236, 245, 1)',
                color: item.id == selected ?  'white' : 'rgba(34, 125, 165, 1)',
                }}>
            
                <strong>
                <p>{item.name}</p>
                </strong>
            </button>
            ))}
        </aside>
    );
}

