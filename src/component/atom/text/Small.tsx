/* eslint-disable import/no-extraneous-dependencies */
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/merge';

export const ParagraphVariants = cva('max-w-prose text-white', {
  variants: {
    size: {
      small: 'text-xs lg:sm',
      default: 'text-sm lg:text-base',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof ParagraphVariants> {}

const Small = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(ParagraphVariants({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

Small.displayName = 'Small';

export default Small;
