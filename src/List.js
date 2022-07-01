
const List = ({items}) => {
    return(
        <div className='list'>
            {items.map(item => (
                <div className="item-preview" key={item.id}>
                    <h3>{item.date}</h3>
                    <p>{item.percentage} %</p>
                </div>    
            ))}
        </div>
    );
}
export default List;