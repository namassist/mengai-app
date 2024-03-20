"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/context";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { PiTextAlignJustifyBold } from "react-icons/pi";

export default function Header({
  classes,
}: {
  classes?: string;
  type?: string;
}) {
  const { isOpen, setIsOpen } = useAppContext();
  const { theme, setTheme } = useTheme();

  return (
    <header className={`w-full flex justify-between items-center ${classes}`}>
      <div className="flex items-center gap-4">
        {!isOpen && (
          <Button
            variant="ghost"
            className="h-auto px-2 rounded-md border-[1px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <PiTextAlignJustifyBold />
          </Button>
        )}
        <h2 className="font-semibold text-gray-500 dark:text-gray-200 text-xl">
          Dashboard
        </h2>
      </div>
      <div className="flex items-center bg-gray-50 dark:bg-[#302751] px-4 py-2 rounded-lg shadow-sm gap-6">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=BlondeGolden&facialHairType=BeardMedium&facialHairColor=Black&clotheType=BlazerSweater&eyeType=Squint&eyebrowType=UpDown&mouthType=Smile&skinColor=Yellow"
              alt="@shadcn"
              className="w-8"
            />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <div className="text-xs tracking-wide">
            <p>Chairul Anaam M</p>
            <span className="text-muted-foreground text-xs">Student</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            theme === "light" ? setTheme("dark") : setTheme("light")
          }
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}
