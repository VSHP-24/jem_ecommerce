function Loader() {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite] rounded-full bg-primary-600"></div>
      <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.1s] rounded-full bg-primary-400"></div>
      <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.2s] rounded-full bg-primary-200"></div>
      <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.3s] rounded-full bg-primary-200"></div>
      <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.4s] rounded-full bg-primary-400"></div>
      <div className="h-12 w-1.5 animate-[bounce_1s_ease-in-out_infinite_0.5s] rounded-full bg-primary-600"></div>
    </div>
  );
}

export default Loader;
