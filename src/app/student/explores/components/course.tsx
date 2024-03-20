import { Card, CardContent } from "@/components/ui/card";
import { EnrollDialog } from ".";
interface CourseProp {
  name: string;
  teacher: {
    name: string;
    image: string;
  };
  progress: number;
}

export default function Course({
  course,
  className,
}: {
  course: CourseProp;
  className: string;
}) {
  return (
    <div
      className={`${className} relative border border-transparent border-dashed group`}
    >
      <div className="absolute w-full h-full border border-dashed rounded-lg inset-0 z-20 duration-300 ease-out border-indigo-500 dark:border-neutral-600 group-hover:-translate-x-1 group-hover:-translate-y-1"></div>
      <div className="absolute inset-0 z-10 w-full h-full duration-300 ease-out border border-dashed rounded-lg border-indigo-500 dark:border-neutral-600 group-hover:translate-x-1 group-hover:translate-y-1"></div>
      <Card className="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1 border-dashed border border-transparent border-indigo-500">
        <CardContent className="p-4 space-y-2">
          <p className="uppercase text-xs text-gray-400/95 overflow-hidden text-ellipsis whitespace-nowrap">
            STR - TEKNOLOGI REKAYASA KOMPUTER
          </p>
          <p className="text-sm font-bold text-gray-600/90 overflow-hidden text-ellipsis whitespace-nowrap">
            {course?.name}
          </p>
          <p className="text-xs text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            beatae.
          </p>
          <p className="uppercase text-xs text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap">
            {course?.teacher?.name}
          </p>
          <div className="text-xs p-0">
            <EnrollDialog trigger="Klik untuk memasuki kelas ini" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
