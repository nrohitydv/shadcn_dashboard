import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Mail } from "@/types";

interface Props {
  mails: Mail[];
  onSelectMail: (mail: Mail) => void;
}

const MailScroller: React.FC<Props> = ({ mails, onSelectMail }) => {
  return (
    <ScrollArea className="relative h-[500px]">
      <div className="flex flex-col gap-2 p-4 pt-0">
        {mails.map((data) => (
          <button
            key={data.id}
            className="flex p-2 border-b hover:bg-1 rounded-lg"
            onClick={() => onSelectMail(data)}
          >
            <div className="flex flex-col ml-4 items-start justify-start">
              <span className="font-bold">{data.name}</span>
              <span className="text-sm">{data.subject}</span>
              <p className="text-sm text-start">
                {data.text.substring(0, 150)}...
              </p>
              <div className="flex gap-3">
                {data.labels.map((label) => (
                  <Badge key={label} className="bg-2 text-1 hover:bg-2">
                    {label}
                  </Badge>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export default MailScroller;
