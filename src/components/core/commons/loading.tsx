import { Loader2Icon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LoadingProps {
  fullHeight?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({ fullHeight = false }) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-center',
        !fullHeight ? 'calc(100vh - 160px)' : '100vh',
      )}
    >
      <Loader2Icon className="animate-spin text-blue-500" />
    </div>
  );
};
