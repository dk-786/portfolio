import React from 'react';

import { cn } from '@/lib/utils';
import { IContainer } from '@/utils/types/type';

const Container = ({ children, className = '' }: IContainer) => {
  return (
    <div
      className={cn(className, 'mx-auto max-w-[1440px] px-5 lg:px-10 xl:px-20')}
    >
      {children}
    </div>
  );
};

export default Container;
