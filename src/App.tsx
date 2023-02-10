import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";

function App() {
    console.log('App rendering')

    let [ratingvalue, setRatingValue] = useState<RatingValueType>(4)

    return (
        <div className="App">
            <Rating value={ratingvalue} onClick={setRatingValue}/>
        </div>
    );
}

export default App;
