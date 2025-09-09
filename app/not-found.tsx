import { Button } from "@heroui/button";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <Image
        alt="Lost animation"
        className="w-72 h-72 object-contain mb-8 rounded-md"
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHFxeHYzYzlyMjdhNWppdGFlaHZ1enE2YWZvbXpnZWhzbmU0N21vcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MWSRkVoNaC30A/giphy.gif"
      />

      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Oops! Got lost?
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-md">
        The page you&#39;re looking for doesn&#39;t exist or has been moved.
        Let&#39;s get you back on track.
      </p>

      <Button
        as={Link}
        className="text-sm font-normal text-white bg-primary-400 dark:bg-primary-500 hover:bg-primary-400"
        href="/"
        endContent={<FaHome size={22} />}
        variant="flat"
      >
        Go Home
      </Button>
    </div>
  );
}
