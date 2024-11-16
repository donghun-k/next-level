'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import type { Dispatch, SetStateAction } from 'react';
import type { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
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

interface Props {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const mailFormSchema = z.object({
  from: z.string().email('올바른 이메일 주소를 입력해주세요'),
  subject: z.string().min(1, '제목을 입력해주세요'),
  message: z.string().min(10, '메시지는 최소 10자 이상 입력해주세요'),
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
      console.log('Form data:', data);
      // TODO: Implement email sending logic
      onOpenChange(false);
      reset();
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  };

  const onError: SubmitErrorHandler<MailFormData> = (errors) => {
    console.error('Form validation error:', errors);
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
