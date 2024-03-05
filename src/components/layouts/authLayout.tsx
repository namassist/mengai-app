import { Header, Sidebar } from "..";

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="container pt-4 h-full min-h-screen grow overflow-auto pb-10 bg-[#dbdefc42] space-y-6">
        <Header />
        <hr />
        {children}
      </main>
    </div>
  );
}
