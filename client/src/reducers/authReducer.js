import * as actions from '../actions/types';

export default function(state=null, action) {
    console.log(action)
    switch(action.type) {
        case actions.FETCH_USER:
            return action.payload || false;
        default: 
            return state;
    }
}