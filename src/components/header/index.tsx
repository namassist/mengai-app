import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PiMagnifyingGlassBold, PiMoonBold } from "react-icons/pi";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-end">
      <div className="relative">
        <PiMagnifyingGlassBold className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          className="md:w-[175px] lg:w-[350px] pl-8"
          type="search"
          placeholder="Search for anything"
        />
      </div>
      <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm gap-2">
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
        <Button variant="ghost">
          <PiMoonBold size={20} />
        </Button>
      </div>
    </header>
  );
}
