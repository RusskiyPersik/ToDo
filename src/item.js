const Item = ({item, onRemoveItem}) => (
    <div>
        <p>{item.title}</p>
        <p>{item.task_type}</p>
        <p>{item.details}</p>
        <span>
            <button type="button" onClick={() => onRemoveItem(item)}>
                Remove Task
            </button>
        </span>
        <hr />
    </div>
);

export default Item;