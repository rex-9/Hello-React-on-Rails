import { createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = '/api/greetings';

const FETCH = 'Hello-React-on-Rails/greetings/FETCH';

export default (state = '', action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return action.payload;
    default:
      return state;
  }
};

export const fetchGreeting = createAsyncThunk(FETCH, async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.message;
});