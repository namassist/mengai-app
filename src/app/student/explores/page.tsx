"use client";

import { AuthLayout } from "@/components";
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
import * as React from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { MdElectricBolt, MdEngineering } from "react-icons/md";
import { PiArrowsLeftRightDuotone, PiMoneyFill } from "react-icons/pi";
import { RiFilter2Line } from "react-icons/ri";
import { TbBusinessplan } from "react-icons/tb";
import { Card } from "./components";

export default function Explores() {
  const [selectedMajor, setSelectedMajor] = React.useState<string>("all");
  const [selectedSort, setSelectedSort] = React.useState<string>("newest");

  return (
    <AuthLayout>
      <Tabs defaultValue="all" className="h-full space-y-6">
        <div className="flex items-center gap-4">
          <TabsList>
            <TabsTrigger value="all" className="relative">
              All
            </TabsTrigger>
            <TabsTrigger value="active" disabled>
              Active
            </TabsTrigger>
            <TabsTrigger value="finished" disabled>
              Finished
            </TabsTrigger>
          </TabsList>
          <Select defaultValue={selectedMajor} onValueChange={setSelectedMajor}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">
                  <div className="flex items-center gap-3">
                    <RiFilter2Line /> All
                  </div>
                </SelectItem>
                <SelectItem value="electro">
                  <div className="flex items-center gap-3">
                    <MdElectricBolt /> Elektro
                  </div>
                </SelectItem>
                <SelectItem value="akuntansi">
                  <div className="flex items-center gap-3">
                    <PiMoneyFill /> Akuntansi
                  </div>
                </SelectItem>
                <SelectItem value="sipil">
                  <div className="flex items-center gap-3">
                    <BiBuildingHouse /> Sipil
                  </div>
                </SelectItem>
                <SelectItem value="mesin">
                  <div className="flex items-center gap-3">
                    <MdEngineering /> Mesin
                  </div>
                </SelectItem>
                <SelectItem value="business">
                  <div className="flex items-center gap-3">
                    <TbBusinessplan /> Administrasi Bisnis
                  </div>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select defaultValue={selectedSort} onValueChange={setSelectedSort}>
            <SelectTrigger className="w-[200px]">
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
        <TabsContent value="all" className="border-none p-0 outline-none">
          <section className="w-full h-full">
            <div className="w-full flex flex-wrap gap-4 mt-4">
              {courseStats.map((course, index) => (
                <Card
                  key={index}
                  course={course}
                  className="w-full lg:w-[calc(33.33%_-_.75rem)] mb-2"
                />
              ))}
            </div>
            <Pagination className="mt-10">
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
  {
    name: "2324-Genap-TI 4A-Metode Penelitian afaf agfag afgasg",
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
  {
    name: "2324-Genap-TI 4A-Virtual System",
    teacher: {
      name: "Wiktasari, S.T., M.Kom.",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
    },
    progress: 50,
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
  {
    name: "2324-Genap-TI 4A-Virtual System",
    teacher: {
      name: "Wiktasari, S.T., M.Kom.",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
    },
    progress: 50,
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
  {
    name: "2324-Genap-TI 4A-Virtual System",
    teacher: {
      name: "Wiktasari, S.T., M.Kom.",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
    },
    progress: 50,
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
  {
    name: "2324-Genap-TI 4A-Virtual System",
    teacher: {
      name: "Wiktasari, S.T., M.Kom.",
      image:
        "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Blank&hatColor=Blue03&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale",
    },
    progress: 50,
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
