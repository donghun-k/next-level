import { Metadata } from "next";

import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me ┃ NEXT LEVEL",
  description: "저에게 연락을 하시려면 이곳을 통해 메일을 보내주세요.",
  openGraph: {
    title: "Contact Me ┃ NEXT LEVEL",
    description: "저에게 연락을 하시려면 이곳을 통해 메일을 보내주세요.",
  },
};

const ContactPage = async () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 pb-[100px] pt-[50px]">
      <ContactForm />
    </section>
  );
};

export default ContactPage;
