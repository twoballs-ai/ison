import React, { useState, useEffect } from "react";
import { Pagination } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';

function CustomersPagination({ current, totalPage, onChangePage, pageNumber, currentPage }) {
    const navigate = useNavigate();
    const pagesList = []
    
    for (let items = 1; items <= totalPage; items++) {
        pagesList.push(items)
    }
    console.log(pagesList)
    let tempNumberOfPages = [...pagesList]

    if (pagesList.length < 6) {
        tempNumberOfPages = pagesList
      } else if (Number(currentPage)>= 1 && Number(currentPage) <= 3 && pagesList.length >= 6) {
        tempNumberOfPages = [1, 2, 3, 4,"...", pagesList.length]
      } else if (Number(currentPage) === 4) {
        const sliced = pagesList.slice(2, 5)
        tempNumberOfPages = [1,"...",...sliced, "...", pagesList.length]
      } else if (Number(currentPage) > 4 && Number(currentPage) < pagesList.length - 2) {  
              
        const sliced1 = pagesList.slice(Number(currentPage)-2, Number(currentPage))                 
        const sliced2 = pagesList.slice(Number(currentPage), Number(currentPage) + 1) 
        console.log(pagesList.length)   
        tempNumberOfPages = ([1, "...", ...sliced1, sliced2,"...", pagesList.length]) 
        console.log(tempNumberOfPages)
      } 
      else if (Number(currentPage) > pagesList.length - 3) {                 // > 7
        const sliced = pagesList.slice(pagesList.length - 4)       // slice(10-4) 
        tempNumberOfPages = ([1, "...", ...sliced])                        
      } else if (Number(currentPage) === pagesList.length) {
        console.log(currentPage)
        const sliced = pagesList.slice(0, 4)
        console.log('sliced:')
        console.log(sliced)
        tempNumberOfPages = [...sliced, pagesList.length]
      }  

    const handleRowClick=(page)=>{
        navigate(`/customers/${page}`);
        console.log(page)
    }
    const handlePrevClick=(page)=>{
        navigate(`/customers/${page-1}`);
        console.log(page)
    }
    const handleNextClick=(page)=>{
        navigate(`/customers/${Number(page)+1}`);
        console.log(page)
    }
    return (
        <nav aria-label="...">
            <ul className="pagination">

                <li className="page-item">
                    <a className={`${Number(currentPage) === 1 ? 'page-link disabled' : 'page-link'}`} onClick={() => handlePrevClick(currentPage)}>Пред.</a>
                </li>

                {tempNumberOfPages.map(((item, index) => {
                    return <li key={index} className={`${"..." === item ? 'page-item disabled' : 'page-item'}`}>
                        <a 
                        className={`${Number(currentPage) === Number(item) ? 'page-link active' : 'page-link'}`} 
                        onClick={() => handleRowClick(item)}>{item}
                        </a></li>
                }))}


                <li className="page-item">
                    <a className={`${Number(currentPage) === pagesList.length ? 'page-link disabled' : 'page-link'}`} onClick={() => handleNextClick(currentPage)}>След.</a>
                </li>
            </ul>
        </nav>
    );
}
export default CustomersPagination