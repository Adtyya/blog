/* eslint-disable import/no-extraneous-dependencies */
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/merge';

export const HeadingVariants = cva('max-w-prose text-white', {
  variants: {
    size: {
      small: 'text-4xl',
      default: 'text-5xl',
      medium: 'text-6xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof HeadingVariants> {}

const HeadingOne = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(HeadingVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

HeadingOne.displayName = 'HeadingOne';

export default HeadingOne;
