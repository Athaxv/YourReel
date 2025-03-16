"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import React, { useEffect } from "react";
import { AppSidebar } from "./_components/AppSideBar";
import AppHeader from "./_components/AppHeader";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

function DashboardLayout({ children }) {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.replace("/");
    }
  }, [isSignedIn, router]);

  if (!isSignedIn) {
    return null; // Avoid rendering layout until redirect happens
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <AppHeader />
        <div className="p-10">
        {children}
        </div>
      </div>
    </SidebarProvider>
  );
}

export default DashboardLayout;
