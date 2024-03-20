"use client";

import { Header, Sidebar } from "..";

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main
        className={`pt-4 h-full min-h-screen grow overflow-auto pb-10 transition-color duration-500 bg-bgPrimary`}
      >
        <div className="container space-y-6">
          <Header />
          <hr />
          {children}
        </div>
      </main>
    </div>
  );
}
