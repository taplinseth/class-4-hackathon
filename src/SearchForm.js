import React, { useState } from 'react';

const SearchForm = (props) => {
    const [input, setInput] = useState("");
    
    const inputUpdate = (event) => {
        setInput({input: event.target.value})
      }

    const formSubmit = (event) => {
        event.preventDefault()
        props.getSearchInput(input)
      }

    return (
        <div>
          <h3>Search</h3>
          <form onSubmit={formSubmit}>
            <input onChange={inputUpdate}/>
            <button>Submit</button>
          </form>
      </div>
    )
}

export default SearchForm;

// takes input of string into input element
// form with input element and submit button