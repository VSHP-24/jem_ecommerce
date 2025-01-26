import { useSearchParams } from "react-router-dom";
import { useOutsideClick } from "../../hooks/useOutsideClick";

function SortBy({ sortByOptions, onHandleShowSort }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const ref = useOutsideClick(onHandleShowSort);

  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <aside
      ref={ref}
      className="absolute bottom-48 right-12 z-30 h-fit w-fit translate-y-0 gap-4 rounded-2xl bg-primary-300 p-6 transition"
    >
      <ul className="pr-8">
        {sortByOptions.map((option) => {
          return (
            <li
              key={option.value}
              className="flex gap-1 text-base laptopS:text-lg"
            >
              <input
                type="radio"
                id={option.value}
                name="sortByOption"
                value={option.value}
                className="cursor-pointer accent-black"
                onChange={handleChange}
                checked={sortBy === option.value}
              />
              <label htmlFor={option.label}>{option.label}</label>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SortBy;
