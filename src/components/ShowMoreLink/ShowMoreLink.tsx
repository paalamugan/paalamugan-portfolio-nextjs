import type { FC } from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "@react-icons/all-files/ai/AiOutlineArrowRight";

interface ShowMoreLink {
  href: string;
  label: string;
}
export const ShowMoreLink: FC<ShowMoreLink> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="mt-8 hover:bg-transparent bg-primary/100 hover:text-gray-900 font-semibold text-white py-2 px-8 border hover:border-gray-400 border-transparent rounded-full"
    >
      <div className="app__flex gap-2">
        Show More {label} <AiOutlineArrowRight />
      </div>
    </Link>
  );
};
