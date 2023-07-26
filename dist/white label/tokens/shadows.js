
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
                    measure: 2,
                    unit: "Pixels",
                    css: "2px"
                   },
           spread: {
                    measure: 0,
                    unit: "Pixels",
                    css: "0px"
                   },
           color: "rgba(74,74,74,15)",
         };
const sm2 = {  
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
                     measure: 4,
                     unit: "Pixels",
                     css: "4px"
                    },
           radius: {
                    measure: 6,
                    unit: "Pixels",
                    css: "6px"
                   },
           spread: {
                    measure: -2,
                    unit: "Pixels",
                    css: "-2px"
                   },
           color: "rgba(74,74,74,13)",
         };
const md2 = {  
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
  /** Used for cards and panels. */
      sm2,
  /** Used for navigation bars and menus. */
      md,
  /** Used for navigation bars and menus. */
      md2,
  /** Used for modals. */
      lg,
}