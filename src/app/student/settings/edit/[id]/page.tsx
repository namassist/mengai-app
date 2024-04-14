import { AuthLayout } from "@/components";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImGithub } from "react-icons/im";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

import Image from "next/image";

export default function page() {
  return (
    <AuthLayout>
      <section className="w-full lg:flex-row gap-8 p-14 relative border border-transparent border-dashed group">
        <div className="absolute w-full h-full border border-dashed rounded-lg inset-0 z-20 duration-300 ease-out border-indigo-500 dark:border-neutral-600 -translate-x-1 -translate-y-1"></div>
        <div className="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-lg border-indigo-500 dark:border-neutral-600 translate-x-1 translate-y-1"></div>
        <div className="w-full flex gap-8 items-start relative z-30 duration-300 ease-out -translate-x-1 -translate-y-1 border-dashed border border-transparent border-indigo-500">
          <div className="w-2/12">
            <div className="w-40 h-40 relative">
              <Image
                src="/people.jpg"
                alt="Your image description"
                width={500}
                height={500}
                className="rounded-full bg-cover object-cover object-top h-full w-full"
              />
              <input
                type="file"
                className="absolute top-0 h-full w-full rounded-full opacity-0 cursor-pointer hover:bg-gray-500 hover:bg-opacity-50"
              />
            </div>
          </div>
          <div className="w-10/12 space-y-6">
            <div className="w-full flex gap-10">
              <div className="w-6/12 items-center gap-1.5">
                <Label htmlFor="firstname">Firstname</Label>
                <Input type="text" id="firstname" placeholder="e.g. achmad" />
              </div>
              <div className="w-6/12 items-center gap-1.5">
                <Label htmlFor="lastname">Lastname</Label>
                <Input type="text" id="lastname" placeholder="e.g. fulan" />
              </div>
            </div>
            <div className="w-full flex gap-10">
              <div className="w-6/12 items-center gap-1.5">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="e.g. +6282114069628"
                />
              </div>
              <div className="w-6/12 items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="e.g. achmafulaeni@gmail.com"
                />
              </div>
            </div>
            <div className="w-full">
              <Label htmlFor="message">Bio</Label>
              <Textarea
                placeholder="Description Bio"
                id="message"
                className="min-h-20"
              />
            </div>
            <div className="w-full flex gap-10">
              <div className="w-6/12 flex items-center gap-4">
                <Label
                  htmlFor="phone"
                  className="bg-neutral-200/60 rounded-full h-8 w-8 flex justify-center items-center"
                >
                  <IoLogoLinkedin size={17} />
                </Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="https://linkedin.com/"
                />
              </div>
              <div className="w-6/12 flex items-center gap-4">
                <Label
                  htmlFor="phone"
                  className="bg-neutral-200/60 rounded-full h-8 w-8 flex justify-center items-center"
                >
                  <IoLogoFacebook size={17} />
                </Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="https://www.facebook.com/"
                />
              </div>
            </div>
            <div className="w-full flex gap-10">
              <div className="w-6/12 flex items-center gap-4">
                <Label
                  htmlFor="phone"
                  className="bg-neutral-200/60 rounded-full h-8 w-8 flex justify-center items-center"
                >
                  <IoLogoInstagram size={17} />
                </Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="https://www.instagram.com/afaf"
                />
              </div>
              <div className="w-6/12 flex items-center gap-4">
                <Label
                  htmlFor="phone"
                  className="bg-neutral-200/60 rounded-full h-8 w-8 flex justify-center items-center"
                >
                  <ImGithub size={17} />
                </Label>
                <Input
                  type="text"
                  id="phone"
                  placeholder="https://github.com/namassist/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
