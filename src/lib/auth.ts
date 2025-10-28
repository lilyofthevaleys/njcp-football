import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is where you would normally validate against your database
        // For demo purposes, we're using a mock user
        if (credentials?.email === "demo@njcp.org" && credentials?.password === "demo1234") {
          return {
            id: "1",
            name: "Demo User",
            email: "demo@njcp.org",
            role: "athlete"
          };
        }
        
        // Coach login
        if (credentials?.email === "coach@njcp.org" && credentials?.password === "coach1234") {
          return {
            id: "2",
            name: "Coach Demo",
            email: "coach@njcp.org",
            role: "coach"
          };
        }
        
        // Admin login
        if (credentials?.email === "admin@njcp.org" && credentials?.password === "admin1234") {
          return {
            id: "3",
            name: "Admin User",
            email: "admin@njcp.org",
            role: "admin"
          };
        }
        
        return null;
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const u = user as any;
        token.role = u.role as string | undefined;
        token.id = u.id as string | undefined;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const su = session.user as any;
        su.role = token.role as string | undefined;
        su.id = token.id as string | undefined;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET || "njcp-football-secret-key",
};