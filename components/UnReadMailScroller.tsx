import { mails } from "@/constants";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const UnReadMailScroller = () => {
  return (
    <div>
      <ScrollArea className="h-[500px]">
        <div className="flex flex-col gap-2 p-4 pt-0">
          {mails.slice(12).map((data) => (
            <button
              key={data.id}
              className="flex p-2 border-b border-gray-200 hover:bg-1"
            >
              <div className="flex flex-col ml-4 items-start">
                <span className="font-bold">{data.name}</span>
                <span className="text-sm text-gray-600">{data.subject}</span>
                <p className="text-sm text-gray-800">
                  {data.text.substring(0, 100)}...
                </p>
                <div className="flex">
                  {data.labels.map((label) => (
                    <Badge key={label} className="bg-2 text-1">
                      {label}
                    </Badge>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default UnReadMailScroller;
