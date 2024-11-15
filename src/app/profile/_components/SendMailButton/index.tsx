'use client';

import { useState } from 'react';
import { IoMail } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

import SendMailDialog from './SendMailDialog';

const SendMailButton = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleButtonClick = () => {
    setOpenDialog(true);
  };

  return (
    <>
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger asChild>
          <Button type="button" onClick={handleButtonClick}>
            <IoMail className="mr-2 size-6" />
            Contact
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="size-fit">
          <div className="space-y-1">
            <p className="text-sm font-bold">Click the button to send email</p>
            <p className="text-sm text-muted-foreground">
              donghun.kdh@gmail.com
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
      <SendMailDialog open={openDialog} onOpenChange={setOpenDialog} />
    </>
  );
};

export default SendMailButton;
