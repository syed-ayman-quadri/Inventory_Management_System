import { useState } from "react";

function AddItem(props) {
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [type, setType] = useState("")
    const [brand, setBrand] = useState("")
    
    const addItemButtonPressed = () => {
        props.addItem({
            name: name, 
            price: price, 
            type: type, 
            brand: brand
        });
        setName("");
        setPrice(0);
        setType("");
        setBrand("");
    };

    return (
        <div className="container">
            <div className="row">
            <h2>Add an Item</h2>
            </div>

            <div className="row">
                <div className="col">
                <label htmlFor="name-field">Name:</label>
                <input
                id="name-field"
                type="text"
                value={name}
                className="form-control"
                onChange={ (e) => setName(e.target.value)} 
                />
                </div>

                <div className="col">
                <label htmlFor="price-field">Price:</label>
                <input
                id="price-field"
                type="number"
                value={price}
                className="form-control"
                onChange={ (e) => setPrice(e.target.value)}
                />
                </div>

                <div className="col">
                <label htmlFor="type-field">Type:</label>
                <input
                id="type-field"
                type="text"
                value={type}
                className="form-control"
                onChange={ (e) => setType(e.target.value)}
                />
                </div>

                <div className="col">
                <label htmlFor="brand-field">Brand:</label>
                <input
                id="brand-field"
                type="text"
                value={brand}
                className="form-control"
                onChange={ (e) => setBrand(e.target.value)}
                />
                </div>
            </div>
            <div className="row mt-3">
            <div className="col-5" />
            <button type='button' className="col-2 btn btn-primary" onClick={addItemButtonPressed}>Add Item</button>
            </div>
        </div>
    )
}

export default AddItem