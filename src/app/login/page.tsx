import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <main className="text-gray-800 relative flex flex-col items-center justify-center h-screen">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <section className="space-y-5">
          <Image
            className="mx-auto"
            src="./logo.svg"
            alt="logo google"
            width="60"
            height="60"
          />
          <Card className="w-[400px] border-t-blue-400 border-t-4 shadow-lg">
            <CardHeader>
              <CardTitle className="mb-2">
                <p className="text-sm text-gray-500 mb-7 font-normal tracking-wide">
                  <Link className="text-blue-600" href="/">
                    Home
                  </Link>{" "}
                  / Login
                </p>
                <p></p>Login
              </CardTitle>
              <CardDescription>
                Input your username and password.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-7 mt-3">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" placeholder="username" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="password" />
              </div>
            </CardContent>
            <CardFooter className="mt-3 flex-col space-y-3">
              <Button className="w-full">Login</Button>
              <Button className="w-full" variant="outline">
                <Image
                  src="./google.svg"
                  alt="logo google"
                  width="25"
                  height="25"
                />
                Login dengan Google
              </Button>
            </CardFooter>
          </Card>
          <p className="text-center text-sm">
            ©2024 Mengai. All rights reserved.
          </p>
        </section>
      </main>
    </>
  );
}
