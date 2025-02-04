function FormRow({ label, error, children }) {
  return (
    <div
      className={
        "flex flex-col gap-2 px-0 py-4 text-base text-black first:pt-0 last:pb-0 has-[:button]:flex has-[:button]:content-end has-[:button]:gap-5 last:has-[button]:grid-cols-1 last:has-[button]:justify-items-center laptopS:grid laptopS:grid-cols-[1fr_2fr] laptopS:items-center laptopS:justify-evenly laptopS:text-lg"
      }
    >
      {label && (
        <label htmlFor={children.props?.id} className="font-semibold uppercase">
          {label}
        </label>
      )}

      {children}
      {error && (
        <span className="w-fit rounded-xl bg-red-400/50 px-3 text-base font-bold tracking-wider text-red-700">
          {error}
        </span>
      )}
    </div>
  );
}

export default FormRow;
