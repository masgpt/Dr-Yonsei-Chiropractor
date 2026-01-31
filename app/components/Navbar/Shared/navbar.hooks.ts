import { usePathname } from 'next/navigation';

export const useNavbarLogic = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinkClass = (path: string) => 
    `text-sm font-bold tracking-tight transition-all duration-200 px-3 py-1.5 rounded-lg ${
      isActive(path) 
        ? 'text-primary bg-primary/5' 
        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
    }`;

  return { isActive, navLinkClass, pathname };
};
