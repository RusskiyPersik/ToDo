const Item = ({item, onRemoveItem, onEditItem}) => (
    <div>
        <p>{item.title}</p>
        <p>{item.task_type}</p>
        <p>{item.details}</p>
        <span>
            <button type="button" onClick={() => onRemoveItem(item)}>
                Remove Task
            </button>
        </span>
        <span>
            <button type="button" onClick={() => onEditItem(item)}>
                Edit Task
            </button>
        </span>
        <hr />
    </div>
);

export default Item;