import LogoTest from "@assets/icons/Logo";
import Toggle from "@components/Toggle";

export const Header = () => {
  return (
    <div className="shadow w-full h-20 bg-white  dark:bg-gray-800 dark:border-gray-700 flex flex-row justify-between items-center px-10 fixed">
      <LogoTest />
      <Toggle />
    </div>
  );
};
