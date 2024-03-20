import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CourseStats() {
  return (
    <Link
      href="#"
      className={`relative border border-transparent border-dashed cursor-pointer group`}
    >
      <div className="absolute w-full h-full border border-dashed rounded-lg inset-0 z-20 duration-300 ease-out border-indigo-500 dark:border-neutral-600 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
      <div className="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-lg border-indigo-500 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></div>
      <Card className="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 border-dashed border border-transparent border-indigo-500">
        <CardContent className="p-4 flex items-end justify-between gap-2">
          <div className="w-5/12 space-y-2 flex items-center gap-6">
            <div className="h-10 w-10 rounded-lg flex justify-center items-center bg-indigo-200 text-indigo-600 uppercase font-bold">
              md
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold text-gray-600/90 overflow-hidden text-ellipsis whitespace-nowrap">
                Mobile Prototyping
              </p>
              <p className="uppercase text-xs text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
                Wiktasari
              </p>
            </div>
          </div>
          <div className="w-5/12 flex gap-8 justify-center">
            <div className="space-y-1">
              <p className="uppercase text-xs text-gray-400 ">Lesson</p>
              <p className="text-sm text-center font-bold text-gray-700">
                8/16
              </p>
            </div>
            <div className="space-y-1">
              <p className="uppercase text-xs text-gray-400">Complexity</p>
              <p className="text-sm text-center font-bold text-yellow-600">
                1/5
              </p>
            </div>
            <div className="space-y-1">
              <p className="uppercase text-xs text-gray-400">Progress</p>
              <p className="text-sm text-center font-bold text-indigo-600">
                50%
              </p>
            </div>
          </div>
          <div className="w-2/12 flex justify-end">
            <Button size="sm" className="bg-indigo-600">
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
