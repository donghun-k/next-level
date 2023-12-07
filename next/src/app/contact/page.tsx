import { FormEventHandler } from "react";
import { IoIosMail } from "react-icons/io";

const ContactPage = async () => {
  const handleSubmit: FormEventHandler = async (e) => {
    "use server";
    e.preventDefault();
  };
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-10">
      <h1 className="text-2xl font-extrabold text-gray-700">CONTACT ME</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] rounded-xl bg-gray-50 p-5 shadow-xl"
      >
        <div className="flex w-full flex-col items-start gap-2 p-2">
          <label htmlFor="name" className="text-xl font-bold text-gray-500">
            Name
          </label>
          <input
            className="w-full rounded-sm p-1 shadow-md"
            required
            type="text"
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
            id="message"
          />
        </div>
        <div className="mt-1 flex w-full justify-end p-1">
          <button
            className="flex items-center gap-2 rounded-md bg-gray-500 px-6 py-2 shadow-md duration-500 hover:bg-gray-400 active:bg-gray-700"
            type="submit"
          >
            <span className=" text-lg font-bold text-white">Send</span>
            <IoIosMail className="mt-1 h-6 w-6 text-white" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactPage;
