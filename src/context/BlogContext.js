import React from 'react';
import createDataContext from './createDataContext';

const reducerFunc = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'add_blogpost':
            return [...state, {title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    console.log('addBlogPost');
    return () => dispatch({type: 'add_blogpost'});
}

export const {Context, Provider} = createDataContext(
    reducerFunc, 
    {addBlogPost}, 
    []);


 