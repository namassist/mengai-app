import { AuthLayout } from "@/components";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";
import { PiEnvelopeSimple, PiMapPin } from "react-icons/pi";

export default function Settings() {
  return (
    <AuthLayout>
      <section className="w-full lg:flex-row gap-8 py-6 px-8 relative border border-transparent border-dashed group">
        <div className="absolute w-full h-full border border-dashed rounded-lg inset-0 z-20 duration-300 ease-out border-indigo-500 dark:border-neutral-600 -translate-x-1 -translate-y-1"></div>
        <div className="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-lg border-indigo-500 dark:border-neutral-600 translate-x-1 translate-y-1"></div>
        <div className="w-full flex justify-between items-start relative z-30 duration-300 ease-out -translate-x-1 -translate-y-1 border-dashed border border-transparent border-indigo-500">
          <div className="flex gap-4">
            <div className="w-20 h-20">
              <Image
                src="/people.jpg"
                alt="Your image description"
                width={500}
                height={500}
                className="rounded-full bg-cover object-cover object-top h-full w-full"
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Chairul An'aam Maulidin</h2>
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <PiMapPin />
                  Semarang, Indonesia
                </div>
                <div className="flex items-center gap-1">
                  <PiEnvelopeSimple />
                  chairulanmm@gmail.com
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="#"
                  className="bg-neutral-200/60 rounded-full h-8 w-8 flex justify-center items-center"
                >
                  <IoLogoLinkedin size={15} />
                </Link>

                <Link
                  href="#"
                  className="bg-neutral-200/60 rounded-full h-8 w-8 flex justify-center items-center"
                >
                  <IoLogoFacebook size={17} />
                </Link>
                <Link
                  href="#"
                  className="bg-neutral-200/60 rounded-full h-8 w-8 flex justify-center items-center"
                >
                  <IoLogoInstagram size={17} />
                </Link>
                <Link
                  href="#"
                  className="bg-neutral-200/60 rounded-full h-8 w-8 flex justify-center items-center"
                >
                  <ImGithub size={15} />
                </Link>
              </div>
              <p className="text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Temporibus ex maxime quas, ducimus cupiditate ullam!
              </p>
            </div>
          </div>
          <Link href="/student/settings/edit/3q4werstg">
            <Button size="sm" className="bg-indigo-600">
              Edit Profile
            </Button>
          </Link>
        </div>
      </section>
    </AuthLayout>
  );
}
