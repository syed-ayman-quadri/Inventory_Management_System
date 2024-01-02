function ItemsDisplay(props) {
    const showItem = (item) => {
        return (
            <div>
                <p>ID: {item.id}</p>
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Type: {item.type}</p>
                <p>Brand: {item.brand}</p>
            </div>
        )
    }
    
    return (
        <div>
            {props.item.map(showItem)}
        </div>
    )
}

export default ItemsDisplay;