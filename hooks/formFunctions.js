import { db } from "../database/config";
import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const collectionName = "users";

export const handleChange = (name, value, state, setState) => {
  setState({ ...state, [name]: value });
};

export const saveNewUser = async (state) => {
  if (state.username === "" || state.email === "" || state.phone === "") {
    alert("Por favor llena todos los campos");
  } else {
    try {
      await addDoc(collection(db, collectionName), {
        username: state.username,
        email: state.email,
        phopne: state.phone,
      });

      alert("Usuario guardado!");
    } catch (err) {
      console.log(err);
      alert("Error en la app: " + err.message);
    }
  }
};

export const getUsers = async (callback) => {
  try {
    await onSnapshot(collection(db, collectionName), callback);
  } catch (err) {
    console.log(err);
    alert("Error en la app: " + err.message);
  }
}