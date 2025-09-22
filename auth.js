import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import Nodemailer from "next-auth/providers/nodemailer"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  }),

  GithubProvider({
      clientId: process.env.GITHUB_ID,      
      clientSecret: process.env.GITHUB_SECRET, 
    }),
    
   Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
        secure: true,
      },
      from: process.env.EMAIL_FROM,
    }),
    
],
 adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.AUTH_FIREBASE_PROJECT_ID,
      clientEmail: process.env.AUTH_FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.AUTH_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  }),
   callbacks: {
    async session({ session, user }) {
      // Add user id (uid) to the session
      session.user.uid = user.id;
      return session;
    },
  },

    secret: process.env.NEXTAUTH_SECRET, 
});
