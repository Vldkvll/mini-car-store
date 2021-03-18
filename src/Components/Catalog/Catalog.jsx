import React from 'react'
import Item from '../Catalog/Item/Item'
import Filter from './Filter/Filter'
import Pagination from './Pagination/Pagination'

function Catalog() {
    return (
        <div>
            Catalog
            <Filter />
            <Item />
            <Pagination />
        </div>
    )
}

export default Catalog
