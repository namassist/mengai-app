"use client";

import { AuthLayout } from "@/components";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiBookOpenBold, PiExamBold, PiNotepadBold } from "react-icons/pi";

export default function page() {
  return (
    <AuthLayout>
      <Tabs defaultValue="all" className="h-full space-y-6">
        <div className="flex items-center gap-4">
          <TabsList>
            <TabsTrigger value="all" className="relative">
              All
            </TabsTrigger>
            <TabsTrigger value="lesson">Lessons</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="exams">Exams</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="all"
          className="border-none p-0 outline-none w-full flex gap-8"
        >
          <div className="w-8/12 h-40 space-y-6">
            <div className="bg-neutral-100 bg-opacity-60 rounded-lg p-4 space-y-1 cursor-pointer">
              <p className="border-l-[3px] border-green-400 pl-2 font-bold uppercase text-xs text-neutral-400">
                01 Lesson
              </p>
              <div className="flex items-center justify-between">
                <div className="space-y-1 pl-3">
                  <p className="font-semibold text-neutral-600">
                    Introduction Web Programming
                  </p>
                  <p className="text-neutral-500 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam provident et quod.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="rounded-full p-2 bg-indigo-50 h-10 w-10 hover:text-neutral-100 text-indigo-600 hover:bg-indigo-600"
                >
                  <PiBookOpenBold size={18} />
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 bg-opacity-60 rounded-lg p-4 space-y-1 cursor-pointer">
              <p className="border-l-[3px] border-yellow-400 pl-2 font-bold uppercase text-xs text-neutral-400">
                01 Assignment
              </p>
              <div className="flex items-center justify-between">
                <div className="space-y-1 pl-3">
                  <p className="font-semibold text-neutral-600">
                    Impplementation Web Design
                  </p>
                  <p className="text-neutral-500 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam provident et quod.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="rounded-full p-2 bg-indigo-50 h-10 w-10 hover:text-neutral-100 text-indigo-600 hover:bg-indigo-600"
                >
                  <PiNotepadBold size={18} />
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 bg-opacity-60 rounded-lg p-4 space-y-1 cursor-pointer">
              <p className="border-l-[3px] border-indigo-400 pl-2 font-bold uppercase text-xs text-neutral-400">
                01 Exams
              </p>
              <div className="flex items-center justify-between">
                <div className="space-y-1 pl-3">
                  <p className="font-semibold text-neutral-600">Exams UTS</p>
                  <p className="text-neutral-500 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam provident et quod.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="rounded-full p-2 bg-indigo-50 h-10 w-10 hover:text-neutral-100 text-indigo-600 hover:bg-indigo-600"
                >
                  <PiExamBold size={18} />
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 bg-opacity-60 rounded-lg p-4 space-y-1 cursor-pointer">
              <p className="border-l-[3px] border-green-400 pl-2 font-bold uppercase text-xs text-neutral-400">
                01 Lesson
              </p>
              <div className="flex items-center justify-between">
                <div className="space-y-1 pl-3">
                  <p className="font-semibold text-neutral-600">
                    Introduction Web Programming
                  </p>
                  <p className="text-neutral-500 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam provident et quod.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="rounded-full p-2 bg-indigo-50 h-10 w-10 hover:text-neutral-100 text-indigo-600 hover:bg-indigo-600"
                >
                  <PiBookOpenBold size={18} />
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 bg-opacity-60 rounded-lg p-4 space-y-1 cursor-pointer">
              <p className="border-l-[3px] border-yellow-400 pl-2 font-bold uppercase text-xs text-neutral-400">
                01 Assignment
              </p>
              <div className="flex items-center justify-between">
                <div className="space-y-1 pl-3">
                  <p className="font-semibold text-neutral-600">
                    Impplementation Web Design
                  </p>
                  <p className="text-neutral-500 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam provident et quod.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="rounded-full p-2 bg-indigo-50 h-10 w-10 hover:text-neutral-100 text-indigo-600 hover:bg-indigo-600"
                >
                  <PiNotepadBold size={18} />
                </Button>
              </div>
            </div>
            <div className="bg-neutral-100 bg-opacity-60 rounded-lg p-4 space-y-1 cursor-pointer">
              <p className="border-l-[3px] border-indigo-400 pl-2 font-bold uppercase text-xs text-neutral-400">
                01 Exams
              </p>
              <div className="flex items-center justify-between">
                <div className="space-y-1 pl-3">
                  <p className="font-semibold text-neutral-600">Exams UTS</p>
                  <p className="text-neutral-500 text-xs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Numquam provident et quod.
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="rounded-full p-2 bg-indigo-50 h-10 w-10 hover:text-neutral-100 text-indigo-600 hover:bg-indigo-600"
                >
                  <PiExamBold size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-4/12 h-40 space-y-4 bg-red-100"></div>
        </TabsContent>
      </Tabs>
    </AuthLayout>
  );
}
