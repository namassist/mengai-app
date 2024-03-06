"use client";

import Navbar from "@/components/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { PiBooksFill, PiChatCircleFill, PiExamFill } from "react-icons/pi";

const services = [
  {
    title: "Konten Pembelajaran Dinamis",
    icon: <PiBooksFill color="white" size={40} />,
    desc: "Temukan materi yang disesuaikan khusus untuk Anda, dibuat oleh asisten AI kami yang cerdas",
  },
  {
    title: "Soal Ujian Inovatif",
    icon: <PiExamFill color="white" size={40} />,
    desc: "Tantang diri Anda dengan soal-soal ujian yang dirancang secara unik oleh AI, mendorong pemahaman yang lebih dalam.",
  },
  {
    title: "Analisis Jawaban Cerdas",
    icon: <PiChatCircleFill color="white" size={40} />,
    desc: "Dapatkan wawasan tentang jawaban ujian dengan analisis mendalam dari AI, membantu Anda belajar dari setiap langkah.",
  },
];

const testimonials = [
  {
    url: "/people.jpg",
    name: "Jhon Doe",
    job: "Dosen",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam nesciunt?",
  },
  {
    url: "/people.jpg",
    name: "Jhon Doe",
    job: "Dosen",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam nesciunt?",
  },
  {
    url: "/people.jpg",
    name: "Jhon Doe",
    job: "Dosen",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam nesciunt?",
  },
  {
    url: "/people.jpg",
    name: "Jhon Doe",
    job: "Dosen",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam nesciunt?",
  },
  {
    url: "/people.jpg",
    name: "Jhon Doe",
    job: "Dosen",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sunt quibusdam nesciunt?",
  },
];

const faqs = [
  {
    question: "Apa itu Belalai?",
    answer:
      "Belalai adalah platform pendidikan online yang memanfaatkan kecerdasan buatan untuk menyediakan pengalaman belajar yang personal dan interaktif. Kami menawarkan konten pembelajaran yang dinamis, soal ujian yang inovatif, dan analisis jawaban yang cerdas",
  },
  {
    question: "Bagaimana AI membantu dalam pembelajaran?",
    answer:
      "AI kami dirancang untuk mengadaptasi materi pembelajaran sesuai dengan kebutuhan dan kemampuan setiap individu, membuat soal ujian yang menantang dan relevan, serta menganalisis jawaban untuk memberikan umpan balik yang membantu siswa belajar dan berkembang.",
  },
  {
    question:
      "Apakah saya perlu keahlian teknis untuk menggunakan platform ini?",
    answer:
      "Tidak sama sekali. Platform kami dirancang untuk mudah digunakan oleh siapa saja, tanpa memerlukan keahlian teknis khusus.",
  },
  {
    question: "Apakah platform ini cocok untuk semua tingkat pendidikan?",
    answer:
      "Ya, platform kami dapat disesuaikan untuk berbagai tingkat pendidikan, mulai dari sekolah dasar hingga pendidikan tinggi. Bagaimana cara platform ini menghasilkan soal ujian? Platform kami menggunakan algoritma AI canggih untuk menghasilkan soal ujian yang tidak hanya menilai pengetahuan, tetapi juga kemampuan berpikir kritis dan aplikasi konsep.",
  },
];

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );

  return (
    <>
      <Navbar />
      <main className="text-gray-800 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto">
          <section className="py-5 h-[calc(100vh_-_8rem)] flex flex-col items-center justify-center space-y-7 leading-normal relative">
            <div className="absolute top-0 -z-10 h-full w-full">
              <div className="absolute left-auto top-16 right-96 h-[350px] w-[350px] rounded-full bg-[rgba(109,165,244,0.5)] opacity-50 filter blur-[50px] animate-blob mix-blend-multiply"></div>
              <div className="absolute left-auto top-16 right-40 h-[350px] w-[350px] rounded-full bg-[rgba(109,244,228,0.5)] opacity-50 filter blur-[50px] animate-blob animation-delay-2000 mix-blend-multiply animation-delay-2000"></div>
              <div className="absolute left-auto top-60 right-72 h-[350px] w-[350px] rounded-full bg-[rgba(244,109,145,0.5)] opacity-50 filter blur-[50px] animate-blob animation-delay-4000 mix-blend-multiply animation-delay-4000"></div>
            </div>
            <h1 className="font-semibold text-6xl text-center w-8/12">
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500 inline">
                Transformasi Pendidikan
              </span>{" "}
              indonesia dengan teknologi AI
            </h1>
            <h1 className="text-gray-600 text-center w-6/12">
              Temukan cara belajar baru yang lebih personal, interaktif, dan
              efektif. Biarkan AI membantu mencapai potensi penuh dirimu.
            </h1>
            <div className="flex justify-center gap-5 items-center w-6/12">
              <Button className="px-8">Jelajahi</Button>
              <button className="group relative px-8 py-2 text-blue-600 duration-[400ms] font-medium">
                <u>Punya Pertanyaan?</u>
                <span className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-100 group-hover:w-full" />
                <span className="absolute right-0 top-0 h-0 w-[2px] bg-gradient-to-r from-blue-500 to-green-500 transition-all delay-100 duration-100 group-hover:h-full" />
                <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-green-500 transition-all delay-200 duration-100 group-hover:w-full" />
                <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-gradient-to-r from-blue-500 to-green-500 transition-all delay-300 duration-100 group-hover:h-full" />
              </button>
            </div>
          </section>
          <section className="py-14">
            <p className="text-lg uppercase text-transparent bg-gradient-to-b bg-clip-text from-blue-500 to-green-500 font-semibold">
              services
            </p>
            <h2 className="mt-3 flex items-center gap-2 font-semibold text-4xl text-gray-800">
              <span className="w-4 h-4 bg-gray-800 inline-block rounded-full"></span>
              What You Can Do?
            </h2>
            <div className="w-full flex justify-between items-center mt-16">
              {services?.map((service, index) => (
                <div
                  key={index}
                  className="w-3/12 flex flex-col justify-center items-center text-gray-800"
                >
                  <div className="h-16 w-16 rounded-xl flex justify-center items-center drop-shadow-2xl bg-blue-600">
                    {service?.icon}
                  </div>
                  <h4 className="mt-4 text-xl font-semibold">
                    {service?.title}
                  </h4>
                  <p className="mt-2 text-center text-base leading-relaxed">
                    {service?.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
          <section className="py-14">
            <p className="text-lg uppercase text-transparent bg-gradient-to-b bg-clip-text from-blue-500 to-green-500 font-semibold">
              testimonial
            </p>
            <h2 className="mt-3 gap-2 font-semibold text-4xl text-gray-800">
              <span className="w-4 h-4 bg-gray-800 inline-block rounded-full"></span>
              Testimonials from our customers
            </h2>
            <p className="mt-3">
              We have 100.000+ customers, here are our customer testimonials
            </p>
            <Carousel plugins={[plugin.current]} className="w-full mt-14">
              <CarouselContent className="-ml-5">
                {testimonials?.map((testi, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-5 md:basis-1/2 lg:basis-1/3 bg-gradient-to-b from-gray-50 to-gray-100 flex items-center"
                  >
                    <img
                      src={testi?.url}
                      alt="logo customer"
                      className="rounded-l-lg h-[100%] w-[140px] object-cover"
                    />
                    <div className="flex flex-col p-4">
                      <h4 className="font-semibold text-lg text-gray-700">
                        {testi?.name}
                      </h4>
                      <p className="text-sm text-gray-500">{testi?.job}</p>
                      <p className="text-xs mt-5 text-gray-600">
                        {testi?.message}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>
          <section className="py-14 relative">
            <div className="absolute top-10 -z-10 h-full w-full">
              <div className="absolute left-0 top-14 h-[250px] w-[250px] rounded-full bg-[rgba(109,165,244,0.5)] opacity-50 filter blur-[50px] animate-blob mix-blend-multiply"></div>
              <div className="absolute left-44 top-5 h-[250px] w-[250px] rounded-full bg-[rgba(109,244,228,0.5)] opacity-50 filter blur-[50px] animate-blob animation-delay-2000 mix-blend-multiply animation-delay-2000"></div>
              <div className="absolute left-20 top-40 h-[250px] w-[250px] rounded-full bg-[rgba(244,109,145,0.5)] opacity-50 filter blur-[50px] animate-blob animation-delay-4000 mix-blend-multiply animation-delay-4000"></div>
            </div>
            <div className="w-full flex justify-between">
              <div className="w-6/12">
                <p className="text-lg uppercase text-transparent bg-gradient-to-b bg-clip-text from-blue-500 to-green-500 font-semibold">
                  Faq
                </p>
                <h2 className="flex items-center gap-2 font-semibold text-4xl text-gray-800">
                  <span className="w-4 h-4 bg-gray-800 inline-block rounded-full"></span>
                  Frequently Asked Questions
                </h2>
                <p className="mt-3">
                  Masih bingung atau ragu? Hubungi kami di nomor +6288 999 222
                  333
                </p>
              </div>
              <div className="w-6/12">
                <Accordion type="single" collapsible className="w-full">
                  {faqs?.map((faq, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>{faq?.question}</AccordionTrigger>
                      <AccordionContent>{faq?.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="mt-5 p-3 mb-auto relative text-center text-sm">
        ©2024 Mengai. All rights reserved.
      </footer>
    </>
  );
}
