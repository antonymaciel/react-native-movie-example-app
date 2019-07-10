import EXAMPLE_1 from '../constants/example'
import EXAMPLE_2 from '../constants/example'

const initialState = {
    example: false
}


const example = (state = initialState, action) => {
    switch(action.type){
        case EXAMPLE_1:
            console.log(state);
            return {
                example1: true,
                example2: false
            };
        case EXAMPLE_2:
                console.log(state);
                return {
                    example1: false,
                    example2: true
                };
        default:
                return state;
    } 
}

export default example;