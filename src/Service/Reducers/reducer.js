import { ADD_TO_CART, REMOVE_TO_CART } from "../constants"

export default function cardItems(state=[] ,action)
{
    switch(action.type){
        case ADD_TO_CART :
            return[
                ...state,
                {cardData:action.data}
            ]
            // eslint-disable-next-line no-unreachable
        break;
        
        case REMOVE_TO_CART :
            state.pop();
            return[
                ...state,
            ]
                // eslint-disable-next-line no-unreachable
            break;

        default : 
            return state
    }
}