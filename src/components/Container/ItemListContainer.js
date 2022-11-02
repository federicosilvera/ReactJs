import ItemList from './ItemList';
import './ItemListContainer.css';
import React, {Fragment} from 'react';

function ItemListContainer(){
    return (
        <Fragment>
        <div>
            <ItemList/>
        </div>
        </Fragment>
    )
}

export default ItemListContainer;