import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async () => {
        const user = null;

        if (!user) {
          throw new Error('Invalid credentials.');
        }

        return user;
      },
    }),
  ],
});
