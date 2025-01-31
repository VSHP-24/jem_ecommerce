import Button from "../ui/Button";
import Heading from "../ui/Heading";

function HomePage() {
  return (
    <main className="grid h-dvh w-dvw max-w-[40rem] grid-rows-[1fr_1fr_5rem] place-items-center justify-self-center overflow-clip p-6 tablet:max-w-[50rem] laptopS:grid-cols-2 laptopS:grid-rows-2 laptopL:max-w-[90rem] desktop:max-w-[100rem]">
      <Heading
        as="h1"
        styles="self-center p-10 text-center text-xs font-normal uppercase leading-loose tracking-widest text-white mobile:text-sm tablet:text-lg laptopS:place-self-end laptopS:text-xl"
      >
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
      </Heading>

      <img
        src="/jembrandimage.webp"
        alt="JEM Brand Representation"
        className="object-center laptopS:col-start-2 laptopS:row-start-1 laptopS:row-end-3"
      />

      <div className="m-5 flex items-center justify-center gap-5 self-start laptopS:mt-10">
        <Button variation="secondary" to="collection" additionalStyles="px-4">
          <p className="align-center justify-center text-center text-xs tablet:text-base laptopS:text-sm laptopL:text-base">
            VIEW COLLECTION
          </p>
        </Button>

        <Button variation="primary" to="products" additionalStyles="px-4">
          <p className="align-center justify-center text-center text-xs tablet:text-base laptopS:text-sm laptopL:text-base">
            SHOP PRODUCTS
          </p>
        </Button>
      </div>
    </main>
  );
}

export default HomePage;
