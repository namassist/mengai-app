"use client";

import { AuthLayout } from "@/components";
import { Calendar } from "@/components/ui/calendar";
import Image from "next/image";
import * as React from "react";

export default function Settings() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <AuthLayout>
      <section className="w-full flex flex-col lg:flex-row gap-8 pb-4">
        <div className="w-full lg:w-9/12 text-gray-50 space-y-8">
          <div className="w-full h-40 bg-indigo-500 rounded-lg flex flex-col justify-center px-10 space-y-2 relative">
            <h4 className="text-xl font-normal">Welcome Back</h4>
            <h2 className="text-4xl font-bold">Chairul Anaam M</h2>
            <h2 className="text-gray-200 capitalize text-sm">
              this is settings page
            </h2>
            <Image
              className="absolute right-0 bottom-0 scale-x-[-1]"
              src="/readinh.svg"
              alt="icon logo"
              width={200}
              height={200}
            />
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
    </AuthLayout>
  );
}
