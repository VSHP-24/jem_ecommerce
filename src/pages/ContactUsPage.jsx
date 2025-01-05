import ContactForm from "../features/contact/ContactForm";
import Map from "../features/contact/Map";

function ContactUsPage() {
  return (
    <div className="flex flex-col items-center justify-items-center gap-8 py-5 tablet:m-5 tablet:flex-row tablet:justify-evenly">
      <ContactForm />
      <Map />
    </div>
  );
}

export default ContactUsPage;
