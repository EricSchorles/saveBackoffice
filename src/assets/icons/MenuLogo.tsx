import Link from "next/link";
import { MenuLogoIcon } from "@utils/types/icons.types";

export const Logo = ({ active }: MenuLogoIcon) => (
  <div
    style={{ direction: "ltr" }}
    className={`sticky top-0 z-20 bg-white flex py-4 transition-all duration-75 `}
  >
    <Link href="/">
      <span
        className={`text-tertiary w-full font-bold transition-all duration-700 ${active ? "text-2xl" : "text-xs "
          }`}
      >
        <span className="text-tertiary">{"<"}</span>{" "}
        <span className="text-tertiary">{"L"}</span>
        <span className="text-tertiary">{"o"}</span>
        <span className="text-tertiary">{"g"}</span>
        <span className="text-tertiary">{"o"}</span>
        <span className="text-tertiary">{"/>"}</span>
      </span>
    </Link>
  </div>
);
