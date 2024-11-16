'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Dispatch, SetStateAction } from 'react';
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { sendEmailAction } from '../../_actions/email';

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const mailFormSchema = z.object({
  from: z.string().email('Please enter a valid email address'),
  subject: z.string().min(1, 'Please enter a subject'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
});

type MailFormData = z.infer<typeof mailFormSchema>;

const SendMailDialog = ({ open, onOpenChange }: Props) => {
  const { register, handleSubmit, reset } = useForm<MailFormData>({
    resolver: zodResolver(mailFormSchema),
    defaultValues: {
      from: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<MailFormData> = async (data: MailFormData) => {
    try {
      const formData = new FormData();
      formData.append('from', data.from);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      const result = await sendEmailAction(formData);

      if (result.success) {
        toast.success(result.message);
        onOpenChange(false);
        reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error('An error occurred while sending the email.');
    }
  };

  const onError: SubmitErrorHandler<MailFormData> = (errors) => {
    Object.values(errors).forEach((error) => {
      if (error.message) {
        toast.error(error.message);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send email</DialogTitle>
        </DialogHeader>
        <form id="send-mail-form" onSubmit={handleSubmit(onSubmit, onError)}>
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
              <Input {...register('from')} id="from" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="subject" className="text-left">
                Subject
              </Label>
              <Input {...register('subject')} id="subject" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message" className="text-left">
                Message
              </Label>
              <Textarea
                {...register('message')}
                id="message"
                className="h-24 resize-none"
              />
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button form="send-mail-form" type="submit">
            Send
          </Button>
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
