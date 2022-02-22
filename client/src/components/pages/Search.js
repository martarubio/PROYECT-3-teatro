import React from "react";
import './Search.css'

const SearchBar = (props) => (
    <div className= "Search">
    
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden" style={{ color: 'rgb(131, 5, 5)', fontWeight: 'bold', marginRight: '10px' }}>Buscar espectáculo  </span>
        </label>
        <input
            onChange={props.filter}
            type="text"
            id="header-search"
            placeholder="    introduzca nombre"
            name="s"
        />
        <button type="submit" style={{ background: 'rgb(131, 5, 5)', color: 'white', borderRadius: '10px', marginLeft: '10px' }}>buscar</button>
    </form>

    </div>
);

export default SearchBar;