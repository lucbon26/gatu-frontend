import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const allowedEmails = [
        "lucasbonfil@gmail.com",
        "gatupatagonia@gmail.com",
        "gateaujadede@gmail.com",
        "paolaandrefuentes@gmail.com",
      ];
      return allowedEmails.includes(user.email!);
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/preview`;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
