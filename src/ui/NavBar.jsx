import Button from "./Button";

function NavBar() {
  return (
    <div className="hidden content-center tablet:inline tablet:border-b-2 tablet:border-primary-100 tablet:text-primary-400">
      <ul className="flex justify-evenly text-2xl font-medium">
        <li className="hover:bg-primary-400 hover:text-black active:bg-primary-400 active:text-black">
          <Button to="products">All Products</Button>
        </li>

        <li className="hover:bg-primary-400 hover:text-black">
          <Button to="brands">Brands</Button>
        </li>

        <li className="hover:bg-primary-400 hover:text-black">
          <Button to="categories">Categories</Button>
        </li>

        <li className="hover:bg-primary-400 hover:text-black">
          <Button to="about-us">About Us</Button>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
