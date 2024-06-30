export default function Loading() {
  return (
    <div className="h-dvh bg-base-300 grid place-content-center text-center">
      <div className="">
        <h1 className="text-3xl font-black">Loading...</h1>
        <h1 className="text-xl font-bold">This wont take long.</h1>
        <span className="loading loading-infinity loading-lg mt-5"></span>
      </div>
    </div>
  );
}
