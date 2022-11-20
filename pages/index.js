import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { useState } from 'react'
import { useImmer } from 'use-immer';
import tasksReducer from '@/com/TasksReducer'
import Color from '@/com/Color'
import ImageEditor from '@/com/ImageEditor'
import Element from '@/com/element'
import Extend from '@/com/Extend'





let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTodos);
  const [input, setInput] = useState('');



  function handleAdd(task) {
    dispatch({
      type: 'add',
      title: task,
    })

  }

  const list = tasks.map((item) => {
    return (
      <div>
        {item.title}
      </div>
    )
  })


  return (
    <>
      <div>


       <Extend> sd </Extend>

      </div>


    </>
  );
}
