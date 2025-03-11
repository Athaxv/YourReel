import React from 'react'

import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { auth, currentUser } from '@clerk/nextjs/server'

async function Provider({ children }) {
  // const { userId } = await auth()
  const createUser = useMutation(api.users.CreatenewUser); 
  const user = await currentUser()
  console.log("Registered user:", user)

  return (
    
    <NextThemesProvider
    attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange
        >
            {children}
    </NextThemesProvider>
  )
}

export default Provider