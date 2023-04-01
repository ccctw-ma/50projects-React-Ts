import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

type Todo = {
    todo: string;
    finish: boolean;
};

export default function TodoList() {
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const input = useRef<HTMLInputElement>(null);
    useEffect(() => {
        let data = localStorage.getItem("todoList") || "[]";
        let list: Array<Todo> = JSON.parse(data);
        setTodos(list);
    }, []);

    useEffect(() => {
        localStorage.setItem("todoList", JSON.stringify(todos));
    }, [todos]);
    return (
        <div className={styles.main}>
            <h1>todos</h1>
            <form
                id="form"
                onSubmit={(e) => {
                    e.preventDefault();
                    const newTodo: string = input.current!.value;
                    if (newTodo.length === 0) return;
                    setTodos((pre) => [
                        ...pre,
                        { todo: newTodo, finish: false },
                    ]);
                    input.current!.value = "";
                }}
            >
                <input
                    type="text"
                    className={styles.input}
                    name="input"
                    id=""
                    autoComplete="off"
                    placeholder="Enter your todo"
                    ref={input}
                />
                <ul className={styles.todos}>
                    {todos.map((todo, i) => {
                        return (
                            <li
                                key={i}
                                className={`${todo.finish && styles.completed}`}
                                onClick={(e) => {
                                    const newList = [...todos];
                                    newList[i].finish = !newList[i].finish;
                                    setTodos(newList);
                                }}
                                onContextMenu={(e) => {
                                    e.preventDefault();
                                    let newList = [...todos];
                                    newList.splice(i, 1);
                                    setTodos(newList);
                                }}
                            >
                                {todo.todo}
                            </li>
                        );
                    })}
                </ul>
            </form>
            <small>
                Left click to toggle completed.
                <br />
                Right click to delete todo
            </small>
        </div>
    );
}
