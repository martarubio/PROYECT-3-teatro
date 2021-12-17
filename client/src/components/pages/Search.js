import React from "react";

const SearchBar = (props) => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden" style={{ color: 'rgb(131, 5, 5)', fontWeight: 'bold' }}>Buscar espectáculo</span>
        </label>
        <input
            onChange={props.filter}
            type="text"
            id="header-search"
            placeholder="introduzca nombre"
            name="s"
        />
        <button type="submit" style={{ background: 'rgb(131, 5, 5)', color: 'white' }}>buscar</button>
    </form>
);

export default SearchBar;