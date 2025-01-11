import Button from "../ui/Button";

function PageNotFound() {
  return (
    <>
      <div className="mt-20 flex h-dvh w-dvw flex-col items-center gap-4 overflow-clip text-primary-200 laptopS:gap-6">
        <p className="text-red-600 tablet:text-4xl laptopS:text-7xl">
          Error : <strong className=""> 404 </strong>
        </p>
        <p className="px-4 text-2xl laptopS:text-4xl">Oops! Path Not Found</p>

        <Button
          variation="primary"
          to="/collection"
          additionalStyles=" self-center text-base text-black tablet:text-lg laptopS:text-2xl px-4  "
        >
          Go Back
        </Button>
      </div>

      <img
        src="/broken_down_bike.gif"
        alt="Broken Down Bike"
        className="absolute -bottom-4 -right-5 -z-10 h-[20rem] w-[80rem] self-end laptopS:h-[40rem]"
      />
    </>
  );
}

export default PageNotFound;
