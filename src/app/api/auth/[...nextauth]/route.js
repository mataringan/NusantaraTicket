import { apiInstance } from "@/axios/instance";
import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "mataringan@gmail.com",
                },
                password: {
                    label: "Password",
                    type: "password",
                },
            },

            async authorize(credentials) {
                try {
                    const res = await apiInstance.post(
                        "/login",
                        {
                            email: credentials.email,
                            password: credentials.password,
                        },
                        {
                            headers: {
                                accept: "*/*",
                                withCredentials: true,
                                "Content-Type": "application/json",
                            },
                        },
                    );

                    return res.data.data;
                } catch (error) {
                    console.log("ERROR USER AUTH", error.response.data.message);
                    throw new Error(error.response.data.message);
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },

        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    page: {
        signIn: "/login",
    },
});

export { handler as GET, handler as POST };
