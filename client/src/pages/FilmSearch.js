import React, { useState, useEffect } from "react";
import { searchFilms } from "../utils/API";
import {
    Jumbotron,
    Container,
    Col,
    Form,
    Button,
    Card,
    CardColumns,
  } from "react-bootstrap";

const SearchFilms = () => {
    // creating state for holding returned OMDB data
    const [searchedFilms, setSearchedFilms] = useState([]);
    // creating state for holding search field data
    const [searchInput, setSearchInput] = useState("")
    
    const handleFormSubmit = async (event) => {
        if (!searchInput) {
            return false;
        }
        
        try {
            const response = await searchFilms(searchInput);

            if (!response.ok) {
                throw new Error("Something went wrong when searching OMDB")
            }

            const items = await response.json();

            const filmData = items.map((film) => ({
                
            }))
        }
    }
}