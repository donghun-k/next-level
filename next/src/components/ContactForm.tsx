"use client";
import { IoIosMail } from "react-icons/io";
import { useRef, useState } from "react";
import { useFormStatus } from "react-dom";

import { mailAction } from "@/actions";

import SendingMailBackdrop from "./SendingMailBackdrop";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formdata) => {
        try {
          await mailAction(formdata);
          alert("Mail sent successfully!");
          formRef.current?.reset();
        } catch (error) {
          alert("Mail sent failed!");
        }
      }}
      className="w-[600px] rounded-xl bg-gray-50 p-5 shadow-xl"
    >
      <h1 className="w-full p-2 pb-6 text-center text-3xl font-extrabold text-gray-700">
        Contact Me
      </h1>
      <div className="flex w-full flex-col items-start gap-2 p-2">
        <label htmlFor="name" className="text-xl font-bold text-gray-500">
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
        <label htmlFor="email" className="text-xl font-bold text-gray-500">
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
        <label htmlFor="subject" className="text-xl font-bold text-gray-500">
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
        <label htmlFor="message" className="text-xl font-bold text-gray-500">
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
          <span className=" text-lg font-bold text-white">Send</span>
          <IoIosMail className="mt-1 h-6 w-6 text-white" />
        </button>
      </div>
      <SendingMailBackdrop />
    </form>
  );
};

export default ContactForm;
