import Button from "./Button";

function NavBar() {
  const buttonAdditionalStyles =
    " rounded-full hover:bg-primary-400 hover:text-black  shadow-none shadow-black  ";

  return (
    <div className="hidden content-center laptopL:sticky laptopL:top-20 laptopL:inline laptopL:border-b-2 laptopL:border-primary-100 laptopL:bg-stone-950 laptopL:text-primary-400">
      <ul className="flex justify-evenly text-xl font-medium desktop:text-2xl">
        <li className="">
          <Button additionalStyles={buttonAdditionalStyles} to="collection">
            Collection
          </Button>
        </li>

        <li>
          <Button to="products" additionalStyles={buttonAdditionalStyles}>
            All Products
          </Button>
        </li>

        <li>
          <Button to="brands" additionalStyles={buttonAdditionalStyles}>
            Brands
          </Button>
        </li>

        <li>
          <Button to="categories" additionalStyles={buttonAdditionalStyles}>
            Categories
          </Button>
        </li>

        <li>
          <Button to="about-us" additionalStyles={buttonAdditionalStyles}>
            About Us
          </Button>
        </li>

        <li>
          <Button to="contact-us" additionalStyles={buttonAdditionalStyles}>
            Contact Us
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
