import axios from "axios";
import {
    WORKOUT_ERROR,
    GET_WORKOUT,
    GET_SET,
    GET_WORKOUTS,
  } from "./types";

  export const getWorkout = (workoutId) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(`/api/workout/${workoutId}`, config);
      dispatch({
        type: GET_WORKOUT,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: { error },
      });
    }
  };
  
  export const getWorkouts = () => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get("https://infinite-shelf-25936.herokuapp.com/api/workout", config);
      dispatch({
        type: GET_WORKOUTS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: { error },
      });
    }
  };
  
  export const getSet = (workoutId, setId) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.get(
        `/api/workout/set/${workoutId}/${setId}`,
        config
      );
      dispatch({
        type: GET_SET,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: WORKOUT_ERROR,
        payload: { error },
      });
    }
  };