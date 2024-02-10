import React, { Fragment, useState } from 'react'
import "./Search.css"

const Search = ({history}) => {
    const [ keyword, setKeyword] = useState("");
    const searchSubmitHandler = (e) => {
        e.preventDefault(); //matlab form submit krne pe jo reload hota h woh preventDefault use krne se nhi hoga
        if(keyword.trim()){
            history.push(`/products/${keyword}`); //  /products/apple (apple is keyword)
        }
        else{
            history.push("/products");
        }
    };
  return (
    <Fragment>
    <MetaData title="Search a Product --ECOMMERCE"/>
    <form className='searchBox' onSubmit={searchSubmitHandler}>
    <input
    type='text'
    placeholder='Search a Product...'
    onChange={(e) => setKeyword(e.target.value)}
    />
    <input type='submit' value="Search"/>
    </form>
    </Fragment>
  )
}

export default Search
