import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProviders } from "@/component/SessionProviders";
import { Providers } from "@/component/Providers";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: {
        template: "%s | Nusantara Ticket",
        default: "Nusantara Ticket",
    },
    description: "Aplikasi yang dibuat untuk membeli tiket wisata di Indonesia.",
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={inter.className} suppressHydrationWarning={true}>
                <SessionProviders>
                    <Providers>
                        {children}
                        {/* <Footer /> */}
                    </Providers>
                </SessionProviders>
            </body>
        </html>
    );
}
