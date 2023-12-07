import ContactForm from "@/components/ContactForm";

const ContactPage = async () => {
  return (
    <section className="flex flex-col items-center justify-center gap-6 pb-[100px] pt-[50px]">
      <h1 className="text-2xl font-extrabold text-gray-700">CONTACT ME</h1>
      <ContactForm />
    </section>
  );
};

export default ContactPage;
