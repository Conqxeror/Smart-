import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import { useEffect } from "react";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAqsiOhVS6lkfd_KM2K9xMW3HgSGCV7fnM",
  authDomain: "toggle-ser.firebaseapp.com",
  databaseURL: "https://toggle-ser-default-rtdb.firebaseio.com",
  projectId: "toggle-ser",
  storageBucket: "toggle-ser.appspot.com",
  messagingSenderId: "3708742380",
  appId: "1:3708742380:web:5b9ad20e1f04bf774613c9",
  measurementId: "G-C5WMLPH2JG",
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the Realtime Database
const database = firebase.database();

export default function Select() {
  useEffect(() => {
    // Get a reference to the "motorStatus" node
    const motorStatusRef = database.ref("motorStatus");

    // Get references to the "Activate" and "Deactivate" buttons
    const activateButton = document.getElementById("activateButton");
    const deactivateButton = document.getElementById("deactivateButton");

    // Add event listeners to the buttons
    activateButton.addEventListener("click", function () {
      motorStatusRef.set(1); // Set the "motorStatus" node to 1 (lock)
    });

    deactivateButton.addEventListener("click", function () {
      motorStatusRef.set(0); // Set the "motorStatus" node to 0 (unlock)
    });

    // Listen for changes to the "motorStatus" node
    motorStatusRef.on("value", function (snapshot) {
      const motorStatus = snapshot.val();

      // Update the UI based on the "motorStatus" value
      if (motorStatus === 0) {
        document.getElementById("motorStatus").textContent = "Unlocked";
      } else if (motorStatus === 1) {
        document.getElementById("motorStatus").textContent = "Locked";
      }
    });
  }, []);

  return (
    <>
      <Card className="text-center position-absolute top-50 start-50 translate-middle">
        <Button id="activateButton">Activate</Button>
        <Button id="deactivateButton">Deactivate</Button>
        <p>
          Motor status: <span id="motorStatus">Unlocked</span>
        </p>
      </Card>
    </>
  );
}
