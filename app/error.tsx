"use client";

import { useEffect } from "react";
import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { AiOutlineReload } from "react-icons/ai";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <Image
        alt="Lost animation"
        className="w-72 h-72 object-contain mb-8 rounded-md"
        src="https://media1.tenor.com/m/-CcDrf0B-AAAAAAd/cat-fail-drink.gif"
      />

      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        Something went wrong on our end. Please try again or come back later.
      </p>

      <Button
        className="text-sm font-normal text-white bg-orange-400 dark:bg-orange-500 hover:bg-primary-400"
        endContent={<AiOutlineReload size={22} />}
        variant="flat"
        onPress={() => reset()}
      >
        Retry
      </Button>
    </div>
  );
}
