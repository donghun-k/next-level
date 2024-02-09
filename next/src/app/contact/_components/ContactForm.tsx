"use client";
import { IoIosMail } from "react-icons/io";
import { useRef } from "react";

import { sendMailAction } from "@/actions/mail";
import useToast from "@/hooks/useToast";

import MailSendingProgress from "./MailSendingProgress";
import Toast from "../../_components/Toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { toastInfo, setToastInfo, closeToast } = useToast();

  const formAction = async (formdata: FormData) => {
    try {
      await sendMailAction(formdata);
      setToastInfo({
        show: true,
        message: "Mail successfully sent.",
        type: "success",
      });
      formRef.current?.reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to send mail.";
      setToastInfo({
        show: true,
        message,
        type: "error",
      });
    }
  };

  return (
    <form
      ref={formRef}
      action={formAction}
      className="w-full rounded-xl bg-gray-50 p-2 shadow-xl sm:w-[600px] sm:p-5"
    >
      <h1 className="w-full p-2 pb-4 text-center text-2xl font-extrabold text-gray-700 sm:pb-6 sm:text-3xl">
        Contact Me
      </h1>
      <div className="flex w-full flex-col items-start gap-2 p-2">
        <label
          htmlFor="name"
          className="text-lg font-bold text-gray-500 sm:text-xl"
        >
          Name
        </label>
        <input
          className="w-full rounded-sm p-1 shadow-md"
          required
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-2 p-2">
        <label
          htmlFor="email"
          className="text-lg font-bold text-gray-500 sm:text-xl"
        >
          E-mail
        </label>
        <input
          className="w-full rounded-sm p-1 shadow-md"
          required
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-2 p-2">
        <label
          htmlFor="subject"
          className="text-lg font-bold text-gray-500 sm:text-xl"
        >
          Subject
        </label>
        <input
          className="w-full rounded-sm p-1 shadow-md"
          required
          type="text"
          name="subject"
          id="subject"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-2 p-2">
        <label
          htmlFor="message"
          className="text-lg font-bold text-gray-500 sm:text-xl"
        >
          Message
        </label>
        <textarea
          className="w-full resize-none rounded-sm p-1 shadow-md"
          rows={8}
          required
          name="message"
          id="message"
        />
      </div>
      <div className="mt-1 flex w-full justify-end p-2">
        <button
          className="flex items-center gap-2 rounded-md bg-gray-500 px-6 py-2 shadow-md duration-500 hover:bg-gray-400 active:bg-gray-700"
          type="submit"
        >
          <span className="text-base font-bold text-white sm:text-lg">
            Send
          </span>
          <IoIosMail className="mt-1 h-5 w-5 text-white sm:h-6 sm:w-6" />
        </button>
      </div>
      <MailSendingProgress />
      {toastInfo.show && (
        <Toast
          message={toastInfo.message}
          type={toastInfo.type}
          closeToast={closeToast}
        />
      )}
    </form>
  );
};

export default ContactForm;
