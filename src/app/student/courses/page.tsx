"use client";
import { AuthLayout } from "@/components";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import * as React from "react";
import { PiArrowsLeftRightDuotone } from "react-icons/pi";
import ProgressBar from "./components/progressbar";

export default function Courses() {
  const [selectedSort, setSelectedSort] = React.useState<string>("newest");
  return (
    <AuthLayout>
      <Tabs defaultValue="active" className="h-full space-y-6">
        <div className="flex items-center gap-4">
          <TabsList>
            <TabsTrigger value="active" className="relative">
              Active{" "}
              <span className="text-[10px] text-neutral-500 ml-1 font-bold">
                (10)
              </span>
            </TabsTrigger>
            <TabsTrigger value="completed">
              Completed
              <span className="text-[10px] text-neutral-500 ml-1 font-bold">
                (10)
              </span>
            </TabsTrigger>
            <TabsTrigger value="favorited">
              Favorite{" "}
              <span className="text-[10px] text-neutral-500 ml-1 font-bold">
                (10)
              </span>
            </TabsTrigger>
          </TabsList>
          <Select defaultValue={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="newest">
                  <div className="flex items-center gap-3">
                    <PiArrowsLeftRightDuotone /> Newest
                  </div>
                </SelectItem>
                <SelectItem value="oldest">
                  <div className="flex items-center gap-3">
                    <PiArrowsLeftRightDuotone /> Oldest
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <TabsContent value="active" className="border-none p-0 outline-none">
          <section className="w-full space-y-8">
            <Link
              href="/student/courses/viatb89-ik2it89-dshtg64"
              className={`relative border border-transparent border-dashed cursor-pointer group block`}
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
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        value={"40"}
                        classes="w-12 h-12"
                        color="text-orange-500"
                      />
                      <p className="capitalize text-xs text-gray-500 ">
                        Lessons Viewed
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        value={"85"}
                        classes="w-12 h-12"
                        color="text-green-500"
                      />
                      <p className="capitalize text-xs text-gray-500 ">
                        Done Homework
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ProgressBar
                        value={"70.5"}
                        classes="w-12 h-12"
                        color="text-yellow-500"
                      />
                      <p className="capitalize text-xs text-gray-500 ">
                        Average point
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
            <Pagination className="mt-20">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        </TabsContent>
      </Tabs>
    </AuthLayout>
  );
}
