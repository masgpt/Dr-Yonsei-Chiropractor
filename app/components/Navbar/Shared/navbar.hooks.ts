import { usePathname } from 'next/navigation';

export const useNavbarLogic = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    
    // Normalize paths by removing trailing slashes
    const normalizedPathname = pathname.replace(/\/$/, '') || '/';
    const normalizedPath = path.replace(/\/$/, '') || '/';
    
    // Exact match for the root home path of a locale (e.g., /en or /ko)
    const localeRootPattern = /^\/(en|ko)$/;
    if (localeRootPattern.test(normalizedPath)) {
      return normalizedPathname === normalizedPath;
    }
    
    return normalizedPathname.startsWith(normalizedPath);
  };

  const navLinkClass = (path: string) => 
    `text-sm font-bold tracking-tight transition-all duration-200 px-3 py-1.5 rounded-lg ${
      isActive(path) 
        ? 'text-primary bg-primary/5' 
        : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800'
    }`;

  return { isActive, navLinkClass, pathname };
};
