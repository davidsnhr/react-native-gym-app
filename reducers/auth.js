import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_REGISTER,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
  } from "../actions/types";
import { AsyncStorage } from 'react-native';
  
  const initialState = {
    token:  AsyncStorage.getItem('token'),
    token: null,
    isAuthenticated: null,
    loading: false,
    user: null
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          ...payload,
          loading: false
        }
      case CLEAR_REGISTER:
        return {
          ...state,
          loading: true,
        }
      case LOGIN_SUCCESS:
        //localStorage.setItem("token", payload.token);
        const _storeData = async () => {
          try {
            await AsyncStorage.setItem(
              "token",
              payload.token
            );
          } catch (error) {
            console.error(error)
          }
        };

        _storeData();
       
        console.log('success', state);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGOUT:
      case LOGIN_FAIL:
        //localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state;
    }
  }
  