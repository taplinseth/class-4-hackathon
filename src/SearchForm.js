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

    const handleChange = (event) => {
      const { name, value } = event.target;

      this.setState({
        [name]: value
      })
    }

    return (
        <div>
          <h3>Search</h3>
          <form onSubmit={formSubmit}>
            <input/>
            <button>Submit</button>
          </form>
          <label>
            <input type="radio" value="date" onChange={handleChange}/>
            Date
          </label>
          <label>
            <input type="radio" value="tag" onChange={handleChange}/>
            Tag
          </label>
          <label>
            <input type="radio" value="title" onChange={handleChange}/>
            Title
          </label>
      </div>
    )
}

export default SearchForm;

// takes input of string into input element
// form with input element and submit button

// search by tag date author title