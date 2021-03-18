import React from 'react'
import "./Pagination.css";

function Pagination() {
    return (
        <>
           <div class="pagination">
            <ul class="pagination-list">
              <li class="pagination-list__item pagination-list__item--active">
                <a href="#">
                  1

                </a>
              </li>
              <li class="pagination-list__item">
                <a href="#">
                  2

                </a>
              </li>
              <li class="pagination-list__item">
                <a href="#">
                  3

                </a>
              </li>
              <li class="pagination-list__item">
                <a href="#">
                  4

                </a>
              </li>
              <li class="pagination-list__item">
                <a href="#">
                  5

                </a>
              </li>
              <li class="pagination-list__item pagination-list__item--dots">
                <span>
                  ...

                </span>
              </li>
              <li class="pagination-list__item">
                <a href="#">
                  11
                </a>
              </li>
            </ul>
          </div> 
        </>
    )
}

export default Pagination
