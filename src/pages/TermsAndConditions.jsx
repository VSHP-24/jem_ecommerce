import Heading from "../ui/Heading";

function TermsAndConditions() {
  return (
    <div className="flex flex-col gap-6 px-5 py-10 text-lg tracking-widest text-primary-100 tablet:text-xl">
      <Heading
        as="h2"
        styles="text-3xl tablet:text-4xl font-bold text-primary-300"
      >
        Terms and Conditions
      </Heading>
      <p>
        We accept the return of our product only for warranty replacement. We do
        not accept returns for any other reasons such as “I don’t like the
        design after seeing it in person” or “I no longer need it” or “you guys
        take too much time I don’t want the product anymore” or “the delivery is
        delayed so I won’t accept the product” or “the delivery is delayed so I
        have purchased elsewhere” etc. We do not reimburse shipping costs for
        any kind of return of our product. If you have questions about returns,
        please contact us by phone or email.
      </p>

      <Heading
        as="h2"
        styles="text-3xl tablet:text-4xl font-bold text-primary-300"
      >
        Warranty Returns
      </Heading>
      <p>
        Our Lifetime Warranty covers manufacturing defects only like cracks
        formed or breakage upon usage within safe limits. We will provide free
        replacement for the defective part / sub-component.
      </p>

      <p>
        <span className="font-bold text-primary-300">Step 1 : </span>
        Email the details why warranty replacement is requested, to
        <a
          className="text-blue-200 underline"
          href="mailto:joyineverymile@gmail.com"
        >
          {" "}
          joyineverymile@gmail.com{" "}
        </a>
        (including photos). Our team will communicate ( reply to your email )
        regarding the eligibility for replacement.
      </p>

      <p>
        <span className="font-bold text-primary-300">Step 2 : </span>
        Courier the part to be replaced to our address mentioned in the contact
        page of our website. We will not provide reimbursement for the courier
        charge.
      </p>

      <p>
        <span className="font-bold text-primary-300">Step 3 : </span>
        We will dispatch the replacement part in 7-15 working days (or longer
        depending on the product in question as it may be out of production, or
        discontinued or for reasons that may affect the ability of production or
        timeline) and share the tracking details via the same email. We will
        bear the courier charges for sending the replacement part to the
        customer.
      </p>

      <p>
        For Powder Coating or similar surface finish, the warranty period is
        limited to 1 year from the date of dispatch of the order.
      </p>

      <p>
        There is no warranty of any kind for plastic parts such as Windshield.
      </p>

      <p>
        Products of Third Party category are not tested by JEMINDIAA we are
        reselling these products as they are, and we only verify the working
        condition of these products. We are unclear about the compatibility of
        any product on any motorcycle.
      </p>

      <p>
        In case we have verified, there would be clear mentioning of the name of
        the motorcycle on the product title and/or anywhere else on the
        respective product page. These are usually generic products that can fit
        on a variety of bikes but require some level of customisation while
        fitting depending on the motorcycle.
      </p>

      <p>
        In case you purchase any product and it doesn’t fit, we can’t take it
        back. Therefore, if you have any query regarding any product, please
        feel free to mail us with your question or chat with us on Instagram, we
        will clarify to the best of our knowledge before you order.
      </p>
    </div>
  );
}

export default TermsAndConditions;
