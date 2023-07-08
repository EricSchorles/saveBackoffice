import {
  AiOutlineFolderOpen,
  AiOutlineHome,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { BsBoxes, BsCreditCard } from "react-icons/bs";
import {
  PiBooksLight,
  PiImagesLight,
  PiShoppingCartSimple,
  PiTag,
} from "react-icons/pi";

import { FiUsers } from "react-icons/fi";
import { LiaUsersSolid } from "react-icons/lia";
import Logo from "@assets/icons/LogoGseller";
import MenuItem from "@components/menu";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { TbSettingsPlus } from "react-icons/tb";
import { useCallback } from "react";
import { useSidebarContext } from "@contexts/sidebar";

export const Sidebar = () => {
  const { hovered, setHovered } = useSidebarContext();

  const handleHover = useCallback(() => {
    setHovered((prev: boolean) => !prev);
  }, [setHovered]);

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: <RxDashboard /> },
    {
      pathGroup: "/catalog",
      label: "Catalogo",
      icon: <BsBoxes />,
      subItems: [
        {
          href: "/catalog/products",
          label: "Produtos",
          icon: <PiBooksLight />,
        },
        {
          href: "/catalog/facets",
          label: "Etiquetas",
          icon: <PiTag />,
        },
        {
          href: "/catalog/collections",
          label: "Coleções",
          icon: <AiOutlineFolderOpen />,
        },
        {
          href: "/catalog/assets",
          label: "Imagens",
          icon: <PiImagesLight />,
        },
      ],
    },
    {
      pathGroup: "/sales",
      label: "Vendas",
      icon: <PiShoppingCartSimple />,
      subItems: [
        {
          href: "/sales/orders",
          label: "Ordens",
          icon: <PiShoppingCartSimple />,
        },
        {
          href: "/subitem-2",
          label: "Subitem 2",
          icon: <AiOutlineHome />,
        },
      ],
    },
    {
      pathGroup: "/customers",
      label: "Clientes",
      icon: <FiUsers />,
      subItems: [
        {
          href: "/customers",
          label: "Clientes",
          icon: <FiUsers />,
        },
        {
          href: "/customer-groups",
          label: "Grupos de clientes",
          icon: <LiaUsersSolid />,
        },
        {
          href: "/credit-analysis",
          label: "Análise de Crédito",
          icon: <BsCreditCard />,
        },
      ],
    },
    {
      pathGroup: "/marketing",
      label: "Marketing",
      icon: <AiOutlineThunderbolt />,
      subItems: [
        {
          href: "/marketing",
          label: "Promoções",
          icon: <AiOutlineThunderbolt />,
        },
      ],
    },
    {
      pathGroup: "/settings",
      label: "Configurações",
      icon: <TbSettingsPlus />,
      subItems: [
        {
          href: "/settings",
          label: "Configurações",
          icon: <TbSettingsPlus />,
        },
      ],
    },
  ];

  return (
    <div
      className={`h-screen bg-white p-4 dark:bg-gray-800 text-black transition-all duration-300 ease-in-out fixed left-0 top-0 overflow-hidden z-50 ${hovered ? "w-64 shadow" : "w-20"
        }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={`h-[100px] ${hovered && "flex flex-col items-center"}`}>
        <div className=" ">
          <Logo height="50" width="50" />
        </div>
        {hovered && <div className="mt-2">CESCONNETO</div>}
      </div>
      <nav className="mt-10">
        {menuItems.map((item) => (
          <div key={item.href} className="mb-4">
            <MenuItem {...item} />
          </div>
        ))}
      </nav>

      <div className="mx-auto left-0 absolute bottom-3  right-0  w-max">
        <div className="flex gap-2 text-[#CC5F5F]">
          <RiLogoutCircleRLine fontSize={24} /> {hovered && "Sair"}
        </div>
      </div>
    </div>
  );
};
