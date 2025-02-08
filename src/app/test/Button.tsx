"use client";

import { ReactNode, useState } from "react";

export function Button(props: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count is: {count} {props.children}{" "}
    </button>
  );
}
