import React from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

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
        case 'get_blogposts':
            return action.payload;
            break
        default:
            return state;
    }
}

/*const addBlogPost = (dispatch) => {
    return (title, description, callBack) => {
        dispatch({type: 'add_blogpost', payload: {title, description}});
        callBack();
    }
        
}*/

const addBlogPost = (dispatch) => {
    return async (title, description, callBack) => {
        await jsonServer.post('/blogPosts', {title, description});
        callBack();
    }
}

/*const deleteBlogPost = (dispatch) => {
    return (id) => dispatch({type: 'delete_blogpost', payload: id});
}*/

const deleteBlogPost = (dispatch) => {  
    return async (id) => {
        await jsonServer.delete(`/blogPosts/${id}`);
        dispatch({type: 'delete_blogpost', payload: id});
    }
}

/*const editBlogPost = (dispatch) => {
    return (id, title, description, callBack) => {
        dispatch({type: 'edit_blogpost', payload: {id, title, description}});
        callBack();
    }
}*/

const editBlogPost = (dispatch) => {
    return async (id, title, description, callBack) => {
        await jsonServer.put(`/blogPosts/${id}`, {title, description});
        dispatch({type: 'edit_blogpost', payload: {id, title, description}});
        callBack();
    }
}

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogPosts');
        dispatch({type: 'get_blogposts', payload: response.data});
    }
}


export const {Context, Provider} = createDataContext(
    reducerFunc, 
    {addBlogPost,deleteBlogPost, editBlogPost, getBlogPosts}, 
    []);


 