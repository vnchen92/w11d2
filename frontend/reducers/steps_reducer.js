import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from "../actions/step_actions";

const initialState = {
      1: {
            title: "Take it to the car wash dummy",
            todo_id: 1,
            done: false
      },
      2: {
            title: "Then pay someone to wash it. You're too gross",
            todo_id: 1, 
            done: false
      }
}

const stepsReducer = (state = initialState, action) => {
      Object.freeze(state);
      let nextState = Object.assign({}, state);

      switch (action.type) {
            case RECEIVE_STEPS:
                  nextState = Object.assign({}, action.steps)
                  return nextState;
            case RECEIVE_STEP:
                  nextState[action.step.id] = action.step;
                  return nextState;
            case REMOVE_STEP:
                  delete nextState[action.step.id];
                  return nextState;
            default:
                  return nextState;
      }
}

export default stepsReducer;