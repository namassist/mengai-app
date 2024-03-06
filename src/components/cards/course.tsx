import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface CourseProp {
  name: string;
  teacher: {
    name: string;
    image: string;
  };
  progress: number;
}

export default function CardCourse({
  course,
  className,
}: {
  course: CourseProp;
  className: string;
}) {
  return (
    <Card className={`${className} bg-white shadow-sm`}>
      <CardHeader className="pb-2 pt-0 px-0">
        <CardTitle className="px-0">
          <Image
            className="w-full h-36 object-cover rounded-lg mb-3"
            src="/cover.jpg"
            alt="icon logo"
            width={500}
            height={500}
          />
          <div className="px-4 flex justify-between mb-3">
            <Badge className="bg-indigo-500 text-gray-100 text-[10px] tracking-wide">
              Course
            </Badge>
            <Badge
              variant="outline"
              className="text-muted-foreground text-[10px]"
            >
              Teknologi Rekayasa Komputer
            </Badge>
          </div>
        </CardTitle>
        <CardDescription className="px-4 text-xs font-semibold overflow-hidden text-ellipsis whitespace-nowrap text-gray-600">
          <span>{course?.name}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-0 pb-2 px-4">
        <div className="flex items-center gap-1">
          <Avatar>
            <AvatarImage
              src={course?.teacher?.image}
              alt="@shadcn"
              className="w-10"
            />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <div className="text-xs text-muted-foreground tracking-wide">
            <p>{course?.teacher?.name}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
