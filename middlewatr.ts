import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "firebase-admin/auth";
import { initializeApp, cert, getApps } from "firebase-admin/app";

if (!getApps().length) {
    // Initialize Firebase Admin
    initializeApp({
        credential: cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
        }),
    })
};

// Check user token
export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    if (!token) {
        return NextResponse.redirect(new URL("/", req.url));
    }
    try {
        await getAuth().verifyIdToken(token);
        console.log("User is authenticated");
        return NextResponse.next(); // Continue to the next middleware
    } catch (error) {
        console.error(error);
        return NextResponse.redirect(new URL("/", req.url));
    }
};

// Protected routes
export const config = {
    matcher: ["/main"]
};