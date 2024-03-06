"use client";

import { AuthLayout } from "@/components";
import CardCourse from "@/components/cards/course";
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
import { PiMagnifyingGlassBold } from "react-icons/pi";
export default function Explores() {
  return (
    <AuthLayout>
      <section className="w-full flex flex-col lg:flex-row gap-8 pb-4">
        <Card className="w-full p-10 bg-indigo-100/30">
          <CardContent className="w-full flex justify-between items-center pb-0">
            <Select>
              <SelectTrigger className="w-3/12 py-5 text-muted-foreground">
                <SelectValue placeholder="Select a Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="courses">Courses</SelectItem>
                  <SelectItem value="exam">Exams</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-3/12 py-5 text-muted-foreground">
                <SelectValue placeholder="Select a Major" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="elektro">Teknik Elektro</SelectItem>
                  <SelectItem value="sipil">Teknik Sipil</SelectItem>
                  <SelectItem value="mesin">Teknik Mesin</SelectItem>
                  <SelectItem value="Administrasi Bisnis">
                    Administrasi Bisnis
                  </SelectItem>
                  <SelectItem value="Akuntansi">Akuntansi</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-3/12 py-5 text-muted-foreground">
                <SelectValue placeholder="Select a Lecturer" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="courses">A</SelectItem>
                  <SelectItem value="exam">B</SelectItem>
                  <SelectItem value="exam">C</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Button className="bg-indigo-500 w-[160px] font-medium">
              <PiMagnifyingGlassBold className="h-4 w-4 text-gray-100 mr-2" />
              Search
            </Button>
          </CardContent>
        </Card>
      </section>
      <section>
        <Select>
          <SelectTrigger className="w-[100px] text-xs">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="grapes">Latest</SelectItem>
              <SelectItem value="pineapple">Oldest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div className="w-full flex flex-wrap gap-4 mt-4">
          {courseStats.map((course, index) => (
            <CardCourse
              key={index}
              course={course}
              className="w-full lg:w-[calc(25%_-_.75rem)] mb-2"
            />
          ))}
        </div>
        <Pagination className="mt-8">
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
