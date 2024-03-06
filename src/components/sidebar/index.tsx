"use client";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  PiBookOpenTextBold,
  PiExamBold,
  PiGearSixBold,
  PiHouseBold,
  PiNotepadBold,
  PiQuestionBold,
  PiRocketLaunchBold,
  PiSignOutBold,
} from "react-icons/pi";

const nav = [
  {
    name: "Home",
    icon: <PiHouseBold size={17} />,
    url: "/student/dashboard",
  },
  {
    name: "Explores",
    icon: <PiRocketLaunchBold size={17} />,
    url: "/student/explores",
  },
  {
    name: " My courses",
    icon: <PiBookOpenTextBold size={17} />,
    url: "/student/courses",
  },
  {
    name: " Exams",
    icon: <PiExamBold size={17} />,
    url: "/student/exams",
  },
  {
    name: " Assignments",
    icon: <PiNotepadBold size={17} />,
    url: "/student/assignments",
  },
];

const extNav = [
  {
    name: "Helpdesk",
    icon: <PiQuestionBold size={17} />,
    url: "#",
  },
  {
    name: "Settings",
    icon: <PiGearSixBold size={17} />,
    url: "/student/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="z-50 flex flex-col justify-between h-screen fixed md:sticky left-0 top-0 bg-white shadow-md max-w-[260px] min-w-[260px]">
      <div className="pt-4 px-10 space-y-8">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={40} height={40} alt="logo app" />
          <span className="text-yellow-500 font-extrabold text-xl tracking-wider">
            belalai
          </span>
        </Link>
        <ul className="space-y-2 text-sm">
          {nav?.map((n, index) => (
            <Link
              key={index}
              href={n?.url}
              className={
                pathname.includes(n?.url) ? "side-active" : "side-nonactive"
              }
            >
              {n?.icon}
              {n?.name}
            </Link>
          ))}
        </ul>
        <hr />
        <ul className="space-y-2 text-sm">
          {extNav?.map((ext, index) => (
            <Link
              key={index}
              href={ext?.url}
              className={
                pathname.includes(ext?.url) ? "side-active" : "side-nonactive"
              }
            >
              {ext?.icon}
              {ext?.name}
            </Link>
          ))}
          <li>
            <Button className="w-3/4 bg-indigo-500 gap-2 text-gray-100 text-sm">
              <PiSignOutBold size={20} /> Logout
            </Button>
          </li>
        </ul>
      </div>
      <div className="bg-indigo-500 w-full h-24 rounded-t-lg">
        <Image
          className="mx-auto -mt-16"
          src="/engineering.svg"
          alt="user coffee"
          width={175}
          height={175}
        />
      </div>
    </aside>
  );
}
