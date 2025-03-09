"use client"
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseconfig"
import { Button } from "@/components/ui/button";
export default function MainPage() {
    console.log("Main page");
    const onSignOut = () => {
        signOut(auth).then(() => {
            console.log("User signed out");
            window.location.href = "/";
        }).catch((error) => {
            console.error(error);
        });
    }
    return (
        <div>
        <h1>Welcome to the Lynk</h1>
        <Button onClick={() => onSignOut()}>Sign Out</Button>
        </div>
    );
}