import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';

export default function MovieDisplay() {
    const url = 'https://www.omdbapi.com/?apikey=48e2281c&s=trois'
    const[display, setDisplay] = useState([])

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setDisplay(data.Search))
    }, [])

    return(
        <div className="display">
            {display.slice(0,3).map((movie, idx) => {
                return (
                    <div className="center">
                    <br />
                    <Card key={idx} style={{ width: '14rem' }}>
                        <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>{movie.Year}</Card.Text>
                        </Card.Body>
                    </Card>
                    </div>
                )
            })} 
        </div>
    )
}