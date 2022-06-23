import React from 'react';
import {CatHeader} from './CatHeader';
import {Categories} from './Categories';

export class FoodMenuTable extends React.Component{
    render(){
        return(
            <div className = "table">
                <CatHeader />
                <Categories />
            </div>
        );
    }
}