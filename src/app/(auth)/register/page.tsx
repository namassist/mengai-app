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

export default function Register() {
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
        <Card className="w-full md:w-[570px] border-t-blue-400 border-t-4 shadow-lg">
          <CardHeader>
            <CardTitle className="mb-2">
              <p className="text-sm text-gray-500 mb-4 md:mb-7 font-normal tracking-wide">
                <Link className="text-blue-600" href="/">
                  Home
                </Link>{" "}
                / Register
              </p>
              <p>Register</p>
            </CardTitle>
            <CardDescription>
              Register yourself to do something on MengAI.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-7 md:mt-3">
            <div className="w-full flex items-center gap-5 flex-col md:flex-row">
              <div className="w-1/2 items-center">
                <Label htmlFor="fullname">Full name</Label>
                <Input type="text" id="fullname" placeholder="e.g. jhon doe" />
              </div>
              <div className="w-1/2 items-center">
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" placeholder="e.g. namassist" />
              </div>
            </div>
            <div className="w-full flex items-center gap-5 flex-col md:flex-row">
              <div className="w-1/2 items-center">
                <Label htmlFor="nim">NIM</Label>
                <Input type="text" id="nim" placeholder="e.g. 43320004" />
              </div>
              <div className="w-1/2 items-center">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="e.g. jhondoea@gmail.com"
                />
              </div>
            </div>
            <div className="w-full flex items-center gap-5 flex-col md:flex-row">
              <div className="w-1/2 items-center">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="e.g. Mas*hBurndead0"
                />
              </div>
              <div className="w-1/2 items-center">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  id="confirmPassword"
                  placeholder="e.g. Ma*shBurndead0"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start space-y-3 md:mt-3">
            <Button className="w-full">Register</Button>
          </CardFooter>
        </Card>
        <div className="space-y-10">
          <p className="text-center text-sm">
            Already Have an account?{" "}
            <Link href="/login" className="underline capitalize text-blue-600">
              login!
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
