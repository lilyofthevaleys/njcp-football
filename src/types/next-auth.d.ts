import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface User {
    id?: string;
    role?: 'athlete' | 'coach' | 'admin' | string;
  }

  interface Session {
    user: DefaultSession['user'] & {
      id?: string;
      role?: 'athlete' | 'coach' | 'admin' | string;
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    role?: string;
  }
}