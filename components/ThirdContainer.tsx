import { FaArchive } from "react-icons/fa";
import { MdDeleteForever, MdSnooze } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoReply } from "react-icons/go";
import { LuReplyAll } from "react-icons/lu";
import { IoReturnUpForward } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";
import { Mail } from "@/types";

interface Props {
  mail: Mail;
}

const ThirdContainer: React.FC<Props> = ({ mail }) => {
  return (
    <main>
      <div className="">
        <TooltipProvider>
          <div className="flex justify-between border rounded-md">
            <div className="">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>
                    <FaArchive size={15} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Archive</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>
                    <MdDeleteForever size={15} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Move to Junk</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>
                    <RiDeleteBin5Line size={15} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Move to Trash</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>
                    <MdSnooze size={15} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Snooze</p>
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>
                    <GoReply size={15} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reply</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>
                    <LuReplyAll size={15} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reply all</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>
                    <IoReturnUpForward size={15} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Forward</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button>
                    <BsThreeDotsVertical size={15} />
                  </Button>
                </TooltipTrigger>
              </Tooltip>
            </div>
          </div>
        </TooltipProvider>
      </div>
      <div className="p-4 text-white max-w-md mx-auto rounded-lg border-b ">
        <div className="flex items-center mb-4 border-b rounded-md">
          <div className="rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
            <Avatar>
              <AvatarImage alt={mail.name} />
              <AvatarFallback>
                {mail.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="ml-4">
            <div className="text-lg font-semibold">{mail.name}</div>
            <div className="text-gray-400">{mail.subject}</div>
            <div className="text-gray-400">{mail.date}</div>
            <div className="text-gray-400">Reply-To: {mail.replyTo}</div>
          </div>
        </div>
        <div className="text-gray-400">{mail.text}</div>
      </div>
      <div className="mt-10 mr-2 ml-2">
        <Textarea
          placeholder={`Reply ${mail.name}...`}
          className="bg-primary"
        />
      </div>
      <div className="flex justify-between mt-10">
        <label
          htmlFor="mute"
          className="flex items-center gap-2 text-xs font-normal"
        >
          <Switch
            id="mute"
            aria-label="Mute thread"
            className="bg-button ml-2"
          />
          Mute this thread
        </label>
        <Button className="border m-2 hover:bg-1 text-1 bg-2">Send</Button>
      </div>
    </main>
  );
};

export default ThirdContainer;
