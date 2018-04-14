//ACTION TYPES
const GET_SCORE = 'GET_SCORE';
const RESET_SCORE = 'RESET_SCORE';
const ADD_SCORE = 'ADD_SCORE';


//ACTION CREATORS
const getScore = () => ({type: GET_SCORE})

const resetScore = (score) => ({type: RESET_SCORE, score})
const addScore = (score) => ({type: ADD_SCORE, score})


//REDUCER
export default function reducer(state = 0, action){
  switch(action.type){
    case GET_SCORE:
      return state
    case RESET_SCORE:
      return 0;
    case ADD_SCORE:
      return state++;
  }
}
