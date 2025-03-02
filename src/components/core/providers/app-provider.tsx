'use client';

import { ThemeProvider } from './theme-provider';

// const SessionProvider = dynamic(() =>
//   import("next-auth/react").then((mod) => mod.SessionProvider),
// );

interface AppProviderProps {
  children: React.ReactNode;
  //   session?: Session | undefined;
}

export const AppProviders = ({ children }: AppProviderProps) => {
  return (
    // <SessionProvider refetchOnWindowFocus={false} session={session}>
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="light"
    >
      {children}
    </ThemeProvider>
    // </SessionProvider>
  );
};
