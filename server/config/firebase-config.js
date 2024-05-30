import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

//import serviceAccountKey from "./serviceAccountKey.json" assert { type: "json" };
const serviceAccountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
const app = initializeApp({
  credential: cert(serviceAccountKey),
});

const auth = getAuth(app);
export default auth;
