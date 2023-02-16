// eslint-disable-next-line no-unused-vars
import {ADD_TO_CART} from '../constants'
// eslint-disable-next-line no-unused-vars
import {REMOVE_TO_CART} from '../constants'

export const addToCart = (data)=>{
    return {
        type : 'ADD_TO_CART',
        data : data
    }
}

export const removeToCart = ()=>{
    return {
        type : 'REMOVE_TO_CART',
        
    }
}