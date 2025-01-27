import { useSearchParams } from "react-router-dom";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Button from "./Button";
import { PAGE_SIZE } from "../utils/constants";

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // IF SEARCHPARAMS DOESN'T HAVE PAGE , DEFAULT IS SET TO 1
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  //FINDS THE TOTAL NUMBER OF PAGES
  const pageCount = Math.ceil(count / PAGE_SIZE);

  //MOVE TO NEXT PAGE
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  //MOVE TO PREVIOUS PAGE
  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="grid w-full grid-cols-2 gap-4 text-xs text-primary-200 tablet:grid-cols-[1fr_2fr_1fr] laptopS:flex laptopS:items-center laptopS:justify-center">
      <Button
        onClick={prevPage}
        additionalStyles=" w-28 flex justify-center items-center bg-primary-400 text-black disabled:bg-stone-700/40 disabled:cursor-not-allowed px-4 justify-self-start "
        disabled={currentPage === 1}
      >
        <HiChevronLeft /> <span> Previous </span>
      </Button>

      <p className="col-span-2 row-start-1 text-center text-lg tablet:col-span-1 tablet:col-start-2 tablet:text-base laptopS:text-xl">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE} of
        </span>
        <span className="font-bold text-primary-400"> {count}</span> results
      </p>

      <Button
        onClick={nextPage}
        additionalStyles=" w-28 flex items-center justify-center bg-primary-400 text-black disabled:bg-stone-700/40 disabled:cursor-not-allowed px-4 justify-self-end"
        disabled={currentPage === pageCount}
      >
        <span> Next </span>
        <HiChevronRight />
      </Button>
    </div>
  );
}

export default Pagination;
