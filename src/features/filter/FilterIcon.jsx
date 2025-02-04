import { HiOutlineFilter } from "react-icons/hi";

import Button from "../../ui/Button";

function FilterIcon({ styles, onHandleShowFilter }) {
  return (
    <Button
      additionalStyles={
        " h-fit w-fit rounded-full bg-primary-400 p-4 " + styles
      }
      onClick={onHandleShowFilter}
    >
      <HiOutlineFilter />
    </Button>
  );
}

export default FilterIcon;
