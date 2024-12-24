import React from 'react';
import createDataContext from './createDataContext';

const reducerFunc = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'add_blogpost':
            return [...state, {id: Math.floor(Math.random() * 99999),
                title: action.payload.title, 
                description: action.payload.description}];
                break
        case 'delete_blogpost':
            return state.filter((post) => post.id !== action.payload);
            break
        case 'edit_blogpost':
            return state.map((post) => {
                return post.id === action.payload.id ? action.payload : post;
            });
            break   
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return (title, description, callBack) => {
        dispatch({type: 'add_blogpost', payload: {title, description}});
        callBack();
    }
        
}

const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({type: 'delete_blogpost', payload: id});
}

const editBlogPost = (dispatch) => {
    return (id, title, description, callBack) => {
        dispatch({type: 'edit_blogpost', payload: {id, title, description}});
        callBack();
    }
}


export const {Context, Provider} = createDataContext(
    reducerFunc, 
    {addBlogPost,deleteBlogPost, editBlogPost}, 
    [{title: 'Test Post', description: 'Test Description', id: 1}]);


 