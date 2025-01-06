import Heading from "./Heading";
import Logo from "./Logo";
import SocialMediaLinks from "./SocialMediaLinks";
import Copyright from "./Copyright";
import Button from "./Button";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-10 border-y-2 border-primary-100 py-4 text-base tablet:grid tablet:grid-cols-4 tablet:gap-2">
        {/* ABOUT JEM INDIA */}

        <div className="flex flex-col gap-5 break-words text-primary-100">
          <Logo />
          <p className="mx-5 text-wrap">
            JEM Indiaa offers motorcycle accessories for safety, ergonomics, and
            luggage, designed by motorcycle enthusiasts for adventure.
          </p>
        </div>

        {/* TERMS & POLICIES */}

        <div className="flex flex-col gap-5 break-words text-primary-100">
          <Heading as="h6" styles="text-primary-300 font-bold text-2xl mx-5">
            Terms and Policies
          </Heading>
          <ul className="mx-5 flex flex-col gap-1 text-primary-100">
            <li>
              <Button to="faq">FAQ</Button>
            </li>
            <li>
              <Button to="terms-and-conditions">Terms & Conditions</Button>
            </li>
            <li>
              <Button to="shipping-policy">Shipping Policy</Button>
            </li>
          </ul>
        </div>

        {/* CONTACT INFORMATIONS */}

        <address className="not-italic">
          <Heading as="h6" styles="text-primary-300 font-bold text-2xl mx-5">
            Contact
          </Heading>
          <div className="mx-5 text-base font-medium text-primary-100">
            <span className="text-lg font-bold text-primary-200">
              Address :{" "}
            </span>
            <span>
              Thandavarayan oil Mill Compound, 406-1, Suramangalam Main Rd, Old
              Suramangalam, Salem, Tamil Nadu 636005, India
            </span>
          </div>

          <div className="mx-5 text-base font-medium text-primary-100">
            <span className="text-lg font-bold text-primary-200">Phone : </span>
            <a href="tel:+91 90922 06362">+91 90922 06362</a>
          </div>
        </address>

        {/* SOCIAL MEDIA LINKS */}

        <SocialMediaLinks colors="text-primary-300 mx-5 tablet:mx-0 tablet:pr-10" />
      </div>

      {/* COPYRIGHT */}

      <Copyright />
    </footer>
  );
}

export default Footer;
