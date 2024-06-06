"use client";
import React, { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import NavMail from "@/components/NavMail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MailScroller from "@/components/MailScroller";
import UnReadMailScroller from "@/components/UnReadMailScroller";
import ThirdContainer from "@/components/ThirdContainer";
import { Mail } from "@/types";
import { mails } from "@/constants";

const MailPage: React.FC = () => {
  const [selectedMail, setSelectedMail] = useState<Mail | null>(null);

  const handleSelectMail = (mail: Mail) => {
    setSelectedMail(mail);
  };

  return (
    <div className="flex m-5 min-h-screen">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full w-full rounded-lg border shadow-lg"
      >
        <ResizablePanel
          // defaultSize={33}
          className="border-r"
          minSize={15}
          maxSize={22}
        >
          <div className="flex h-full p-6">
            <NavMail />
          </div>
        </ResizablePanel>
        <ResizableHandle className="bg-gray-200" />
        <ResizablePanel defaultSize={33} className="border-r min-w-[500px]">
          <Tabs defaultValue="mail" className="w-full p-4">
            <div className="flex justify-between items-center mb-4 border-b rounded-md">
              <h1 className="text-xl font-semibold">Inbox</h1>
              <TabsList className="flex space-x-2">
                <TabsTrigger value="mail" className="px-4 py-2">
                  All Mail
                </TabsTrigger>
                <TabsTrigger value="unread" className="px-4 py-2">
                  Unread
                </TabsTrigger>
              </TabsList>
            </div>
            <input
              type="text"
              placeholder="Search"
              className="w-full px-4 py-2 border bg-primary rounded mb-4"
            />
            <TabsContent value="mail">
              <MailScroller mails={mails} onSelectMail={handleSelectMail} />
            </TabsContent>
            <TabsContent value="unread">
              <UnReadMailScroller />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
        <ResizableHandle className="bg-gray-200" />
        <ResizablePanel defaultSize={34} minSize={15}>
          {selectedMail && <ThirdContainer mail={selectedMail} />}
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default MailPage;
