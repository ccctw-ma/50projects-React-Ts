/**
 * @Author: msc
 * @Date: 2022-07-12 20:54:42
 * @LastEditTime: 2022-07-12 21:14:08
 * @LastEditors: msc
 * @Description: 
 */

import { atom } from "recoil";

export const textState = atom({
    key: "text",
    default: "Fuck you Tony"
})

export const todoListState = atom({
    key:"todoListState",
    default: []
})
