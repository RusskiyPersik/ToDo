import Item from './item.js';

const List = ({list, onRemoveItem, onEditItem}) =>  
    list.map(item => (
        <Item 
            key={item.objectID} 
            item={item} 
            onRemoveItem={onRemoveItem}
            onEditItem={onEditItem}
        />
    ))
    
    
   


export default List;
