'use client';

import type { Dispatch, SetStateAction } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const SendMailDialog = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send email</DialogTitle>
          <DialogDescription>{/* 여기 들어갈 내용 */}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="to" className="text-left">
              To
            </Label>
            <Input id="to" defaultValue="donghun.kdh@gmail.com" disabled />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="from" className="text-left">
              From
            </Label>
            <Input id="from" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="subject" className="text-left">
              Subject
            </Label>
            <Input id="subject" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="text-left">
              Message
            </Label>
            <Textarea id="message" className="h-24 resize-none" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Send</Button>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SendMailDialog;
