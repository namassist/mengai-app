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
    <main className="text-gray-800 relative py-5 flex flex-col items-center md:py-0 md:justify-center md:h-screen h-full">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <section className="space-y-5">
        <Image
          className="mx-auto"
          src="./logo.svg"
          alt="logo google"
          width="60"
          height="60"
        />
        <Card className="w-full md:w-[450px] border-t-blue-400 border-t-4 shadow-lg">
          <CardHeader>
            <CardTitle className="mb-2">
              <p className="text-sm text-gray-500 mb-4 md:mb-7 font-normal tracking-wide">
                <Link className="text-blue-600" href="/">
                  Home
                </Link>{" "}
                / Login
              </p>
              <p></p>Login
            </CardTitle>
            <CardDescription>Input your username and password.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-7 md:mt-3">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" placeholder="Username" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" />
              <Link
                href="/forgot-password"
                className="text-xs underline text-blue-600 text-right md:mt-2"
              >
                Lupa Password?
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-3">
            <Link href="/student/dashboard" className="w-full">
              <Button className="w-full">Login</Button>
            </Link>
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
        <div className="space-y-10">
          <p className="text-center text-sm">
            Dont Have an account?{" "}
            <Link
              href="/register"
              className="underline capitalize text-blue-600"
            >
              create one!
            </Link>
          </p>
          <p className="text-center text-sm">
            ©2024 Mengai. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
}
