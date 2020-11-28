import Item from './Item.js';

const List = ({list, onRemoveItem}) => 
    list.map(item => (
    <Item 
        key={item.objectID} 
        item={item} 
        onRemoveItem={onRemoveItem}
    />
    ));

export default List;
