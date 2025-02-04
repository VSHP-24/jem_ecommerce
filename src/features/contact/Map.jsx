import Heading from "../../ui/Heading";

function Map() {
  return (
    <div className="flex flex-col items-center gap-8">
      <Heading styles="tablet:hidden" as="h4">
        Our Location
      </Heading>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.3235090868866!2d78.10887687409999!3d11.671469542049257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1b7337cfe1d%3A0x76f2b8c88b8c1aae!2sJEM%20Indiaa!5e0!3m2!1sen!2sin!4v1736083779261!5m2!1sen!2sin"
        className="h-96 w-full laptopS:h-[36rem] laptopL:w-[24rem] desktop:w-[36rem]"
        allowFullScreen=""
        loading="lazy"
        title="JEM Indiaa"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Map;
