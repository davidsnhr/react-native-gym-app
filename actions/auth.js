import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_REGISTER,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';


// Loader user
export const loadUser = () => async (dispatch) => {

  const value = await AsyncStorage.getItem('token');
  if (value !== null) {
    setAuthToken(value);
  }

  try {
    const res = await axios.get("https://infinite-shelf-25936.herokuapp.com/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const register = ({
  name,
  email,
  phone,
  lastName,
  password,
}) => async (dispatch) => {
  dispatch({type: CLEAR_REGISTER})

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    name,
    email,
    phone,
    lastName,
    password,
  });
  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Usuario registrado', 'success', 3000))
  } catch (err) {
    console.log(err);
    // const errors = err.respone.data.errors;
    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    // }

    Alert('Error','Ocurrió un error intenta de nuevo')
    dispatch(setAlert('Ocurrió un error intenta de nuevo', 'error', 3000))
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  dispatch({type:CLEAR_REGISTER})
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("https://infinite-shelf-25936.herokuapp.com/api/auth", body, config);
    console.log('response login', res);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());   
  } catch (err) {
    console.log('somenthing wronf', err);
    Alert.alert('Error','Ocurrió un error intenta de nuevo')
    dispatch({
      type: LOGIN_FAIL,
    });
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach((error) => {
    //     dispatch(setAlert(error.msg, 'error', 3000));
    //        Alert.alert(`${error.msg}`, 'Bienvenido')

    //   });
    //}
   
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
