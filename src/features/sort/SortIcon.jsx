import { BiSortAlt2 } from "react-icons/bi";
import Button from "../../ui/Button";

function SortIcon({ styles, onHandleShowSort }) {
  return (
    <Button
      additionalStyles={
        " h-fit w-fit rounded-full bg-primary-400 p-4 " + styles
      }
      onClick={onHandleShowSort}
    >
      <BiSortAlt2 />
    </Button>
  );
}

export default SortIcon;
