
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// La configuración de Firebase
const firebaseConfig = {
   
  };

// Iniciando  Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Guardar una tarea en Firestore
 * @param {string} title el titulo de la tarea
 * @param {string} description la descripcion de la tarea
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id  ID tarea
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));



