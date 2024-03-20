"use client";

import { AuthLayout, Course, CourseStats } from "@/components";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { PiCalendarBold, PiCaretRightBold } from "react-icons/pi";

export default function Dashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <AuthLayout>
      <section className="w-full flex flex-col lg:flex-row gap-8 pb-4">
        <div className="w-full lg:w-9/12 text-gray-50 space-y-8">
          <div className="w-full h-40 bg-indigo-500 rounded-lg flex flex-col justify-center px-10 space-y-2 relative">
            <h4 className="text-xl font-normal">Welcome Back</h4>
            <h2 className="text-4xl font-bold">Chairul Anaam M</h2>
            <h2 className="text-gray-200 capitalize text-sm">
              ready to embark on your learning journey?
            </h2>
            <Image
              className="absolute right-0 bottom-0 scale-x-[-1]"
              src="/readinh.svg"
              alt="icon logo"
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-end justify-between">
              <h4 className="text-indigo-400 text-xl font-bold">My Course</h4>
              <Link
                href={"/student/courses"}
                className="dark:text-indigo-400 p-0 h-auto font-semibold uppercase text-xs text-gray-400 flex items-center gap-1 hover:text-gray-500"
              >
                See All <PiCaretRightBold />
              </Link>
            </div>
            <div className="w-full flex gap-8">
              {courseStats?.map((course, index) => (
                <Course
                  key={index}
                  course={course}
                  className="w-full lg:w-6/12 mb-2"
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex items-end justify-between">
              <h4 className="text-indigo-500 text-xl font-semibold">
                Homework
              </h4>
              <Link
                href={"/student/courses"}
                className="dark:text-indigo-400 p-0 h-auto font-semibold uppercase text-xs text-gray-400 flex items-center gap-1 hover:text-gray-500"
              >
                See All <PiCaretRightBold />
              </Link>
            </div>
            <CourseStats />
            <CourseStats />
          </div>
        </div>
        <div className="w-full lg:w-3/12 space-y-8">
          <Card className="drop-shadow-sm min-h-[20rem] dark:bg-[#4F506C] dark:border-bgPrimary">
            <CardHeader className="pb-3">
              <CardTitle className="text-center text-base text-indigo-400 font-semibold ">
                <PiCalendarBold className="inline mr-1" />
                Upcoming Exams
                <hr className="mt-2 mb-4 w-8/12 mx-auto dark:border-indigo-400" />
              </CardTitle>
              <CardContent className="p-0">
                <div className="text-xs text-gray-600 dark:text-gray-200 leading-relaxed mb-4">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    2324-Genap-TI 4A-Integratif Programming
                  </p>
                  <p>Thursday, 07 maret 2024 | 12.30 - 14.00</p>
                  <hr className="mt-1" />
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-200 leading-relaxed mb-4">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    2324-Genap-TI 4A-Metode Penelitian
                  </p>
                  <p>Friday, 08 maret 2024 | 12.30 - 14.00</p>
                  <hr className="mt-1" />
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-200 leading-relaxed">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                    2324-Genap-TI 4A-Metode Penelitian
                  </p>
                  <p>Friday, 08 maret 2024 | 12.30 - 14.00</p>
                  <hr className="mt-1" />
                </div>
              </CardContent>
            </CardHeader>
          </Card>
          <div className="drop-shadow-sm max-h-[22rem] border-[1px] rounded-md shadow-sm dark:bg-[#4F506C] dark:border-bgPrimary">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md w-full flex justify-center"
            />
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}

const courseStats = [
  {
    name: "2324-Genap-TI 4A-Integratif Programming",
    teacher: {
      name: "Wiktasari, S.T., M.Kom.",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
    },
    progress: 25,
  },
  {
    name: "2324-Genap-TI 4A-Metode Penelitian afaf agfag afgasg",
    teacher: {
      name: "Wiktasari, S.T., M.Kom.",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
    },
    progress: 70,
  },
];
