import React from 'react'
import Item from '../Item/Item'
import Filter from './Filter/Filter'
import Pagination from './Pagination/Pagination'

function Catalog({data, onPageChange, totalItemsCount, currentPage, handleAddToCart}) {
    return (
        <div style={{padding:'0 15px'}}>
            <Filter />
            <Item data={data} handleAddToCart={handleAddToCart}/>
            <Pagination 
            onPageChange={onPageChange}
            currentPage={currentPage}
            totalItemsCount={totalItemsCount}/>
        </div>
    )
}

export default Catalog
