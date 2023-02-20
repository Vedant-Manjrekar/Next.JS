'use client';

function Error({ error, reset }) {
  return (
    <div className="">
      <h1>Oops! `${error}` </h1>
      <button onClick={() => reset()}></button>
    </div>
  );
}

export default Error;
