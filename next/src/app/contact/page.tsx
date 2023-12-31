import { Metadata } from "next";

import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me ┃ NEXT LEVEL",
  description: "이 페이지를 통해 저에게 연락할 수 있습니다.",
};

const ContactPage = async () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 pb-[100px] pt-[50px]">
      <ContactForm />
    </section>
  );
};

export default ContactPage;
