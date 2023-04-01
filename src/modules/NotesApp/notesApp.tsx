/*
 * @Author: msc
 * @Date: 2022-08-25 22:12:52
 * @LastEditTime: 2022-08-26 00:30:30
 * @LastEditors: msc
 * @Description:
 */

import React, { useState } from "react";
import styles from "./index.module.css";
import { VscAdd, VscEdit } from "react-icons/vsc";
import { AiOutlineDelete } from "react-icons/ai";

interface Note {
    text: string;
    id: number;
    isEdit: boolean;
}
export default function NotesApp() {
    const [notes, setNotes] = useState<Array<Note>>(
        JSON.parse(localStorage.getItem("notes") || "[]")
    );

    return (
        <div className={styles.main}>
            {notes.map((note) => {
                return (
                    <div className={styles.note} key={note.id}>
                        <div className={styles.tools}>
                            <button className={styles.edit} onClick={() => {}}>
                                <VscEdit
                                    onClick={() => {
                                        setNotes(
                                            notes.map((n) => {
                                                if (n.id === note.id) {
                                                    n.isEdit = !n.isEdit;
                                                    return n;
                                                } else {
                                                    return n;
                                                }
                                            })
                                        );

                                        localStorage.setItem(
                                            "notes",
                                            JSON.stringify(notes)
                                        );
                                    }}
                                />
                            </button>
                            <button
                                className={styles.delete}
                                onClick={() => {
                                    setNotes(
                                        notes.filter((n) => n.id !== note.id)
                                    );
                                    localStorage.setItem(
                                        "notes",
                                        JSON.stringify(
                                            notes.filter(
                                                (n) => n.id !== note.id
                                            )
                                        )
                                    );
                                }}
                            >
                                <AiOutlineDelete />
                            </button>
                        </div>
                        <div
                            className={`${styles.content} ${
                                note.isEdit && styles.hidden
                            }`}
                        >
                            {note.text}
                        </div>
                        <textarea
                            className={(!note.isEdit && styles.hidden) || ""}
                            // defaultValue={note.text}
                            value={note.text}
                            onChange={(e) => {
                                setNotes(
                                    notes.map((n) => {
                                        if (n.id === note.id) {
                                            note.text = e.target.value;
                                            return n;
                                        } else {
                                            return n;
                                        }
                                    })
                                );
                            }}
                            
                        ></textarea>
                    </div>
                );
            })}
            <button
                className={styles.add}
                onClick={() => {
                    setNotes([
                        ...notes,
                        { text: "", id: Date.now(), isEdit: false },
                    ]);
                }}
            >
                <VscAdd  />
           
            </button>
        </div>
    );
}
