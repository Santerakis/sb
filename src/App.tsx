import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./Components/Rating/Rating";
import {UncontrolledAccordion} from "./Components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4)

    return (
        <div className="App">
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledAccordion titleValue={'Menu'}/>
        </div>
    );
}

export default App;
