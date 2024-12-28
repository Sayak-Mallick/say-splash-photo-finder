import React from 'react'

const SearchPhoto = () => {
  return (
    <div>
      <form action="" className='form'>
        <label htmlFor="query" className='label'>
          {" "}
        </label>
        <input type="text" name="query" className='input' placeholder={`Try "landscape" or "Tokyo"`} />
        <button type="submit" className='button'>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchPhoto
