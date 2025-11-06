import { LogoDarkTheme, LogoLightTheme } from "@/ui/icons";

export const Logo = () => {
  return (
    <>
      <LogoLightTheme className="w-[214px] h-8 block dark:hidden" />
      <LogoDarkTheme className="w-[214px] h-8 hidden dark:block" />
    </>
  );
};
