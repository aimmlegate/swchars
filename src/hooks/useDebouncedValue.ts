import { useEffect, useState } from "react";

type Args<T> = {
  value: T;
  delay: number;
};

export const useDebouncedValue = <A>(args: Args<A>): A => {
  const [debounced, setDebounced] = useState<A>(args.value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(args.value);
    }, args.delay);

    return () => {
      clearTimeout(handler);
    };
  }, [args.value, args.delay]);

  return debounced;
};
