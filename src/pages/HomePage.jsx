import Button from "../ui/Button";

function HomePage() {
  return (
    <div className="grid h-dvh w-dvw grid-rows-[1fr_1fr_5rem] place-items-center overflow-clip bg-black p-6 laptopS:grid-cols-2 laptopS:grid-rows-2">
      <p className="self-center p-10 text-center text-xs font-normal uppercase leading-loose tracking-widest text-white mobile:text-sm tablet:text-lg laptopS:place-self-end laptopS:text-xl">
        Cruise in style and comfort with our top-rated parts and elevate your
        <br />
        <span className="text-3xl font-bold text-primary-400 tablet:text-4xl laptopL:text-5xl">
          J
        </span>
        oy in{" "}
        <span className="text-3xl font-bold text-primary-400 tablet:text-4xl laptopL:text-5xl">
          E
        </span>
        very{" "}
        <span className="text-3xl font-bold text-primary-400 tablet:text-4xl laptopL:text-5xl">
          M
        </span>
        ile
      </p>

      <img
        src="jembrandimage.png"
        alt="JEM Brand Representation"
        className="object-center laptopS:col-start-2 laptopS:row-start-1 laptopS:row-end-3"
      />

      <div className="m-5 flex items-center justify-center gap-5 self-start laptopS:mt-10">
        <Button variation="secondary" to="collections">
          <p className="align-center justify-center text-xs tablet:text-base laptopS:text-sm laptopL:text-base">
            VIEW COLLECTION
          </p>
        </Button>
        <Button variation="primary" to="products">
          <p className="align-center justify-center text-xs tablet:text-base laptopS:text-sm laptopL:text-base">
            SHOP BY PRODUCTS
          </p>
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
