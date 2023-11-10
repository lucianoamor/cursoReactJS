import './ItemListContainer.css';

function ItemListContainer(props) {
    const {greeting} = props;
    return (
        <div className="container">
            <p className="lead pt-3">{greeting}</p>
        </div>
    );
}

export default ItemListContainer;
