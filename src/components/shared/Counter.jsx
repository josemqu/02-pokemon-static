import { createSignal } from "solid-js";

export const Counter = () => {
  const [counter, setCounter] = createSignal(10);

  return (
    <>
      <h1 class="text-4xl">Counter</h1>
      <h3 class="text-xl">{counter()}</h3>
      <div>
        <button
          onClick={() => setCounter((prev) => ++prev)}
          class="bg-blue-500 p-2 mr-2 rounded-md m-2 font-bold w-12"
        >
          -1
        </button>
        <button
          onClick={() => setCounter((prev) => --prev)}
          class="bg-blue-500 p-2 mr-2 rounded-md m-2 font-bold w-12"
        >
          +1
        </button>
      </div>
    </>
  );
};
