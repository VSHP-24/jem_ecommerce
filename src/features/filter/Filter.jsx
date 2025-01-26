import { useSearchParams } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

import { useOutsideClick } from "../../hooks/useOutsideClick";

function Filter({ filtersList, onHandleShowFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();

  //THIS CLOSES THE FILTER IF CLICK IS DETECTED OUTSIDE THE FILTER
  const ref = useOutsideClick(onHandleShowFilter);

  function handleOptionClick(filterfield, option) {
    const selectedOption = option.slug ? option.slug : option.id;

    //THIS GETS ALL THE SELECTED FILTER VALUES FROM THE CURRENTLY SELECTED FILTER TYPE
    let selectedFilter =
      searchParams.get(filterfield)?.split(",") ||
      searchParams.get(filterfield) ||
      [];

    // IF THE CURRENTLY SELECTED OPTION DOESN'T EXIST IN THE PREVIOUSLY SELECTED FILTERS LIST, THIS ADDS THE OPTION TO THE LIST
    if (!selectedFilter.includes(selectedOption)) {
      selectedFilter.push(selectedOption);

      // IF THE CURRENTLY SELECTED OPTION ALREADY EXISTS IN THE PREVIOUSLY SELECTED FILTERS LIST, THIS REMOVES THE OPTION FROM THE LIST
    } else if (selectedFilter.includes(selectedOption)) {
      selectedFilter = selectedFilter.filter((cur) => cur !== selectedOption);
    }

    // IF THERE IS MORE THAN ONE SELECTED FILTER , THIS SETS THE SEARCHPARAMS
    if (selectedFilter.length > 0) {
      searchParams.set(filterfield, selectedFilter);

      // IF THERE ARE NO SELECTED FILTERS , THIS DELETE THE SEARCHPARAMS QUERY
    } else {
      searchParams.delete(filterfield);
    }

    // THIS FUCNTION FINALLY SETS THE SEARCHPARAMS
    setSearchParams(searchParams);
  }

  return (
    <aside
      className="absolute right-0 top-0 z-30 flex h-full w-fit translate-y-0 flex-col items-start gap-4 bg-primary-300 p-6 transition"
      ref={ref}
    >
      <Button
        additionalStyles="self-end text-3xl text-black"
        onClick={onHandleShowFilter}
      >
        <IoCloseSharp />
      </Button>

      <Button
        onClick={() => {
          setSearchParams();
          onHandleShowFilter();
        }}
        additionalStyles="text-sm bg-gray-700 text-primary-100 font-extrabold self-end hover:bg-gray-900 "
      >
        ❌ Clear Filters
      </Button>

      {filtersList && (
        <div className="flex flex-col gap-8 overflow-y-auto">
          {filtersList.map((filter) => (
            <div key={filter.filterfield} className="flex flex-col gap-4">
              <Heading as="h6" styles="underline font-medium">
                {filter.filterfield}
              </Heading>

              <ul className="pr-8">
                {filter.filterOptions.map((option) => {
                  return (
                    option.products.length > 0 && (
                      <li
                        key={option.id}
                        className="flex gap-1 text-base laptopS:text-lg"
                      >
                        <input
                          type="checkbox"
                          id={option.id}
                          name={option.name}
                          className="cursor-pointer accent-black"
                          disabled={
                            filter.parentElement &&
                            !(
                              searchParams
                                .get(filter.parentElement)
                                ?.split(",") ||
                              searchParams.get(filter.parentElement) ||
                              []
                            ).includes(
                              option[filter?.parentElement].slug ||
                                option[filter?.parentElement].id,
                            )
                          }
                          // IF FILTER IDs ARE IN SEARCHPARAMS , IT WILL BE CHECKED AUTOMATICALLY
                          checked={searchParams
                            ?.get(filter.filterfield)
                            ?.includes(
                              `${option.slug ? option.slug : option.id}`,
                            )}
                          onChange={() =>
                            handleOptionClick(filter.filterfield, option)
                          }
                        />
                        <label htmlFor={option.name}>{option.name}</label>
                      </li>
                    )
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default Filter;
