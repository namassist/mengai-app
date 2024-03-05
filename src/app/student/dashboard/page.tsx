"use client";

import { AuthLayout } from "@/components";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import * as React from "react";
import { PiCaretRightBold } from "react-icons/pi";

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
    name: "2324-Genap-TI 4A-Metode Penelitian",
    teacher: {
      name: "Wiktasari, S.T., M.Kom.",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
    },
    progress: 70,
  },
  {
    name: "2324-Genap-TI 4A-Virtual System",
    teacher: {
      name: "Wiktasari, S.T., M.Kom.",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
    },
    progress: 50,
  },
];

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
              <h4 className="text-indigo-500 text-xl font-semibold">
                Course Stats
              </h4>
              <Button
                className="text-gray-600 p-0 h-auto"
                variant="ghost"
                size="sm"
              >
                View All <PiCaretRightBold className="ml-3" />
              </Button>
            </div>
            <div className="w-full flex gap-2">
              {courseStats?.map((cm, index) => (
                <Card className="w-4/12 bg-white shadow-sm" key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      {cm?.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-0 pb-3">
                    <div className="flex items-center gap-1">
                      <Avatar>
                        <AvatarImage
                          src={cm?.teacher?.image}
                          alt="@shadcn"
                          className="w-10"
                        />
                        <AvatarFallback>ME</AvatarFallback>
                      </Avatar>
                      <div className="text-xs text-muted-foreground tracking-wide">
                        <p>{cm?.teacher?.name}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="relative gap-2">
                    <span className="absolute right-6 -top-3 text-xs text-muted-foreground">
                      {cm?.progress}%
                    </span>
                    <Progress className="h-1.5 mt-2" value={cm?.progress} />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/12 bg-gray-50 drop-shadow-sm">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md"
          />
        </div>
      </section>
      <section className="w-full flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-9/12 text-gray-50 space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-end justify-between">
              <h4 className="text-indigo-500 text-xl font-semibold">
                Exam Stats
              </h4>
              <Button
                className="text-gray-600 p-0 h-auto"
                variant="ghost"
                size="sm"
              >
                View All <PiCaretRightBold className="ml-3" />
              </Button>
            </div>
            <div className="w-full flex gap-2">
              {courseStats?.map((cm, index) => (
                <Card className="w-4/12 bg-white shadow-sm" key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                      {cm?.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mt-0 pb-3">
                    <div className="flex items-center gap-1">
                      <Avatar>
                        <AvatarImage
                          src={cm?.teacher?.image}
                          alt="@shadcn"
                          className="w-10"
                        />
                        <AvatarFallback>ME</AvatarFallback>
                      </Avatar>
                      <div className="text-xs text-muted-foreground tracking-wide">
                        <p>{cm?.teacher?.name}</p>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="relative gap-2">
                    <span className="absolute right-6 -top-3 text-xs text-muted-foreground">
                      {cm?.progress}%
                    </span>
                    <Progress className="h-1.5 mt-2" value={cm?.progress} />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
        <Card className="w-full lg:w-3/12 bg-gray-50 drop-shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-center text-base text-indigo-500 font-semibold">
              Upcoming Exams
              <hr className="my-2" />
            </CardTitle>
            <CardContent className="p-0 space-y-4">
              <div className="text-xs animate-pulse text-indigo-600 leading-relaxed">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  2324-Genap-TI 4A-Integratif Programming
                </p>
                <p className="text-indigo-600">
                  Thursday, 07 maret 2024 | 12.30 - 14.00
                </p>
                <hr className="mt-1" />
              </div>
              <div className="text-xs text-gray-600 leading-relaxed">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  2324-Genap-TI 4A-Metode Penelitian
                </p>
                <p className="text-muted-foreground">
                  Friday, 08 maret 2024 | 12.30 - 14.00
                </p>
                <hr className="mt-1" />
              </div>
              <div className="text-xs text-gray-600 leading-relaxed">
                <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                  2324-Genap-TI 4A-Metode Penelitian
                </p>
                <p className="text-muted-foreground">
                  Friday, 08 maret 2024 | 12.30 - 14.00
                </p>
                <hr className="mt-1" />
              </div>
              <Button
                className="text-gray-600 p-0 h-auto w-full text-xs hover:bg-transparent"
                variant="ghost"
                size="sm"
              >
                View All <PiCaretRightBold className="ml-3" />
              </Button>
            </CardContent>
          </CardHeader>
        </Card>
      </section>
    </AuthLayout>
  );
}
