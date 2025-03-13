"use client";
import React, { useEffect, useState } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useMutation } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api"; // ✅ Correct


function Provider({ children }) {
  const [User, setUser] = useState(null);
  const { isSignedIn, user } = useUser();
  const createUser = useMutation(api.users.CreatenewUser); // ✅ Correct
// Corrected mutation usage

  useEffect(() => {
    const checkAndCreateUser = async () => {
      if (user) {
        setUser(user);
        console.log(user);
        try {
          const result = await createUser({
            name: user.displayName || user.fullName, // Fixed typo
            email: user.emailAddresses[0]?.emailAddress, // Clerk stores emails as an array
            pictureURL: user.imageUrl, // Fixed incorrect property
          });
          console.log("User created:", result);
        } catch (error) {
          console.error("Error creating user:", error);
        }
      }
    };

    checkAndCreateUser();
  }, [user]); // Added dependency

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

export default Provider;
