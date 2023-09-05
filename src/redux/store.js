import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer, filtersReducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });

// import { configureStore } from '@reduxjs/toolkit';
// import { tasksReducer, filtersReducer } from './reducer';

// export const store = configureStore({
//   reducer: {
//     tasks: tasksReducer,
//     filters: filtersReducer,
//   },
// });
