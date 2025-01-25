import Button from "../ui/Button";

function PageNotFound() {
  return (
    <div className="relative">
      <div className="mt-44 flex h-full flex-col items-center gap-4 overflow-clip text-center font-extrabold text-primary-200 laptopS:gap-6">
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
        className="absolute -bottom-10 -right-5 -z-10 h-[20rem] w-[80rem] self-end opacity-35 laptopS:h-[40rem]"
      />
    </div>
  );
}

export default PageNotFound;
