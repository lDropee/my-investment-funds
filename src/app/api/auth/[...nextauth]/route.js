import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password", placeholder: "*****" },
      },
      async authorize(credentials) {
        const userRegister = JSON.parse(sessionStorage.getItem("userRegister"));

        const matchPassword = await bcrypt.compare(credentials.password, userRegister.password)

        if (!matchPassword) throw new Error('Wrong password')

        return userRegister;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };