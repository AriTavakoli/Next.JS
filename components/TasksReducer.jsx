import { useReducer } from 'react';



export default function tasksReducer(tasks, action) {

  switch (action.type) {
    case 'add': {
      console.log(tasks)
      return [...tasks, {title: action.title}]

    }
  }

}