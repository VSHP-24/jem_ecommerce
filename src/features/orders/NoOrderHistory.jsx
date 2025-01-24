import Button from "../../ui/Button";

function NoOrderHistory() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-primary-400">
      <img
        src="/BikerWaving.png"
        className="h-60 w-60"
        alt="Kid Biker Waving"
      />
      <div className="flex flex-col items-center gap-4 text-center leading-8">
        <p className="laptopS:text-3xl">
          {`Seems you are a Newcomer . Look around and Let's Create History... `}
        </p>
        <p className="text-primary-100 laptopS:text-3xl">
          <strong>{`...Order History 😉`}</strong>
        </p>
      </div>

      <Button
        variation="primary"
        to="/products"
        additionalStyles="text-lg py-2 px-4 text-black laptopS:text-2xl"
      >
        Start Shopping
      </Button>
    </div>
  );
}

export default NoOrderHistory;
