import { Header } from "@/components";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
  PiCaretCircleRightFill,
  PiCheckCircleFill,
  PiCircleBold,
} from "react-icons/pi";

export default function page() {
  return (
    <div
      className={`relative grow pb-10 transition-color duration-500 bg-bgPrimary overflow-y-hidden`}
    >
      <Header
        classes="fixed top-0 border-b-[1px] px-10 pt-2 pb-4 z-50 bg-background"
        type="course"
      />
      <main className="relative mt-[80px] z-10 pl-10">
        <div className="w-[calc(100%_-_280px)] min-h-screen border-r-[1px] pt-6 pr-10 space-y-2">
          <h5 className="text-xl font-bold">KONTORUU!</h5>
          <p className="leading-relaxed text-gray-700 dark:text-gray-200 text-justify font-normal">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
            reprehenderit id quidem adipisci. Laudantium animi rerum veritatis
            earum, atque tempore architecto amet sunt in, eos esse magni
            deleniti nobis cumque molestiae culpa enim asperiores perspiciatis
            quasi libero? Vel, rerum nihil nulla necessitatibus neque
            reprehenderit dolore tempore esse incidunt ipsam numquam vitae quia
            ea illo, quibusdam veniam? Laboriosam incidunt commodi assumenda.
            Dolor architecto eaque rem nihil exercitationem dignissimos
            perferendis, laudantium delectus!
          </p>
        </div>
        <div className="w-[280px] fixed right-0 top-[80px]">
          <div className="flex justify-between items-center p-4">
            <Button variant="ghost" size="icon" className="w-auto h-auto">
              <PiCaretCircleRightFill size={34} />
            </Button>
            <h4 className="font-bold">Daftar Modul</h4>
          </div>
          <div className="border relative p-4">
            <Progress className="h-1.5" value={65} />
            <span className="text-indigo-500 text-[11px] font-semibold">
              65%{" "}
              <span className="text-gray-600 dark:text-gray-200 font-normal">
                Selesai
              </span>
            </span>
          </div>
          <div className="p-4 h-[calc(100vh_-_220px)] overflow-y-scroll ">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm font-semibold text-gray-600 dark:text-gray-200">
                  Persiapan Belajar
                </AccordionTrigger>
                <AccordionContent className="border-l-[1px] pl-4">
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 dark:text-gray-200 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCircleBold className="inline" size={15} />
                    Persetujuan Hak Cipta
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 dark:text-gray-200 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Prasyarat Kemampuan
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Prasyarat Tools
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Mekanisme Belajar
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Forum Diskusi
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm font-semibold text-gray-600 dark:text-gray-200">
                  Persiapan Belajar
                </AccordionTrigger>
                <AccordionContent className="border-l-[1px] pl-4">
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Persetujuan Hak Cipta
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Prasyarat Kemampuan
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Prasyarat Tools
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Mekanisme Belajar
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Forum Diskusi
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm font-semibold text-gray-600 dark:text-gray-200">
                  Persiapan Belajar
                </AccordionTrigger>
                <AccordionContent className="border-l-[1px] pl-4">
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    Persetujuan Hak Cipta
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Prasyarat Kemampuan
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Prasyarat Tools
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Mekanisme Belajar
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Forum Diskusi
                  </Link>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sm font-semibold text-gray-600 dark:text-gray-200">
                  Persiapan Belajar
                </AccordionTrigger>
                <AccordionContent className="border-l-[1px] pl-4">
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Persetujuan Hak Cipta
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Prasyarat Kemampuan
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Prasyarat Tools
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Mekanisme Belajar
                  </Link>
                  <Link
                    href="#"
                    className="text-xs font-medium text-gray-600 hover:underline mb-4 flex items-center gap-2"
                  >
                    <PiCheckCircleFill
                      className="inline text-green-500"
                      size={16}
                    />
                    Forum Diskusi
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </div>
  );
}
