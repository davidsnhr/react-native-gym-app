import {
    GET_WORKOUTS,
    GET_WORKOUT,
    WORKOUT_ERROR,
    GET_SET
  } from "../actions/types";
  
  const initialState = {
    workouts: [],
    workout: null,
    loading: true,
    set: null,
    error: {},
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case GET_SET:
        return {
          ...state,
          set: payload,
          loading: false,
        };
     
      case GET_WORKOUTS:
        return {
          ...state,
          workouts: payload,
          loading: false,
        };
      case GET_WORKOUT:
        return {
          ...state,
          workout: payload,
          loading: false,
        };
      case WORKOUT_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
      default:
        return state;
    }
  }