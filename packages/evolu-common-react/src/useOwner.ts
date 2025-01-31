import { Owner } from "@evolu/common";
import { Function } from "effect";
import { useSyncExternalStore } from "react";
import { useEvolu } from "./useEvolu.js";

/** Subscribe to {@link Owner} changes. */
export const useOwner = (): Owner | null => {
  const evolu = useEvolu();
  return useSyncExternalStore(
    evolu.subscribeOwner,
    evolu.getOwner,
    Function.constNull,
  );
};
