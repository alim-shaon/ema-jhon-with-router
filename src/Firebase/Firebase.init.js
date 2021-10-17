import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebae.config";

const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;
