import { ReactNode, useState } from "react";

import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "@contexts/sidebar";

interface MenuItemProps {
  href?: string;
  pathGroup?: string;
  label: string;
  subItems?: { href: string; label: string; icon: ReactNode }[];
  icon?: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
  href,
  pathGroup,
  label,
  subItems,
  icon,
}) => {
  const asPath = usePathname();
  const { hovered } = useSidebarContext();
  const [expandedSubItems, setExpandedSubItems] = useState<any[]>([]);

  const isMatch = (asPath: string, href: string) => {
    const pathParts = asPath.split("/");
    const hrefParts = href.split("/");
    return pathParts[1] === hrefParts[1];
  };

  const isActive = isMatch(asPath, href ?? pathGroup ?? "");

  const toggleSubItems = (href: any) => {
    setExpandedSubItems((prev: string[]) =>
      prev.includes(href)
        ? prev.filter((item: string) => item !== href)
        : [...prev, href]
    );
  };

  return (
    <div
      className={`flex justify-center flex-col rounded-md whitespace-nowrap ${!hovered && "items-center w-14	h-14"
        } ${isActive && !hovered ? " bg-blue-500 text-white" : ""} ${hovered ? "bg-[#faf9f9] p-2" : ""
        } ${hovered && isActive && !pathGroup ? "text-blue-500" : ""}`}
    >
      <div onClick={() => toggleSubItems(href)}>
        {href ? (
          <Link href={href} className="">
            <div
              className={`${hovered ? "flex items-center gap-2 hover:text-blue-500 " : ""
                }  `}
            >
              <div className="text-xl">{icon}</div>
              {hovered && label}
            </div>
          </Link>
        ) : (
          <div
            className={`cursor-pointer hover:text-blue-500 ${hovered ? "flex items-center justify-between gap-2" : ""
              }  `}
          >
            <div className="flex gap-2 leading-8">
              <div className="text-xl">{icon}</div>
              {hovered && label}
            </div>
            {hovered && (
              <div>
                <RiArrowDropDownLine />
              </div>
            )}
          </div>
        )}
      </div>
      <div className={`${expandedSubItems.includes(href)} && first:mt-2`}>
        {subItems &&
          hovered &&
          expandedSubItems.includes(href) &&
          subItems.map((subItem) => (
            <div
              key={subItem.href}
              className={`pl-1 rounded-md hover:text-blue-500  ${asPath === subItem.href ? "text-blue-500" : ""
                }`}
            >
              <Link href={subItem.href}>
                <div className="flex items-center gap-2">
                  <div className="w-4">{subItem.icon}</div>
                  {hovered && subItem.label}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MenuItem;
