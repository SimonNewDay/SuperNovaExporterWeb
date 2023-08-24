
import { Colors } from './colors';
import { Measures } from './measures';

const sm = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 1,
                     unit: "Pixels",
                     css: "1px"
                    },
           radius: {
                    measure: 3,
                    unit: "Pixels",
                    css: "3px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "rgba(74,74,74,26)",
         };
const md = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 10,
                     unit: "Pixels",
                     css: "10px"
                    },
           radius: {
                    measure: 15,
                    unit: "Pixels",
                    css: "15px"
                   },
           spread: {
                    measure: -3,
                    unit: "Pixels",
                    css: "-3px"
                   },
           color: "rgba(74,74,74,26)",
         };
const lg = {  
           offsetX: {
                     measure: 0,
                     unit: "Pixels",
                     css: "0px"
                    },
           offsetY: {
                     measure: 25,
                     unit: "Pixels",
                     css: "25px"
                    },
           radius: {
                    measure: 50,
                    unit: "Pixels",
                    css: "50px"
                   },
           spread: {
                    measure: -12,
                    unit: "Pixels",
                    css: "-12px"
                   },
           color: "rgba(74,74,74,64)",
         };


export const Shadows = {
  /** Used for cards and panels. */
      sm,
  /** Used for navigation bars and menus. */
      md,
  /** Used for modals. */
      lg,
}