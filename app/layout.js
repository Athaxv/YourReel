import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "./ConvexClientProvider";

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={poppins.className}
      >
        <ConvexClientProvider>
          <Provider>
        {children}
        </Provider>
        </ConvexClientProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
