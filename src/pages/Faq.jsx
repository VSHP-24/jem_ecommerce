import Heading from "../ui/Heading";

function Faq() {
  return (
    <section className="flex flex-col gap-6 px-5 py-10 text-lg tracking-widest text-primary-100 tablet:text-xl">
      <Heading as="h2">Frequently Asked Questions</Heading>

      <Heading as="h4">1. Will I Be Charged Extra For Taxes?</Heading>
      <ul className="list-inside list-disc">
        <li>
          For Domestic orders, The prices displayed on our site are inclusive of
          taxes, you will not have to pay any extra taxes.
        </li>
        <li>
          International orders may be subject to custom duty by your respective
          country. The custom duty will need to be paid by you at the time of
          delivery
        </li>
      </ul>

      <Heading as="h4">2. How Can You Contact Us About This Policy?</Heading>
      <ul className="list-inside list-disc">
        <li>
          Email:{" "}
          <a
            className="text-blue-200 underline"
            href="mailto:joyineverymile@gmail.com"
          >
            {" "}
            joyineverymile@gmail.com{" "}
          </a>
        </li>
        <li>
          Phone: <a href="tel:+91 90922 06362">+91 90922 06362</a>
        </li>
      </ul>

      <Heading as="h4">3. Jurisdiction for legal proceedings</Heading>
      <p>
        Any dispute subject to Coimbatore jurisdiction only, for any and all
        disputes not limited to shipping.
      </p>

      <Heading as="h4">4. Order Cancellation</Heading>
      <p>
        We can’t cancel an order after it is dispatched. If the order is not
        dispatched yet, if a customer requests cancellation for any reason, we
        will refund up to 75% of the total value, in 7-10 working days after
        confirmation from the customer.
      </p>
    </section>
  );
}

export default Faq;
