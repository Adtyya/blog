/* eslint-disable import/no-extraneous-dependencies */
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/utils/merge';

export const ParagraphVariants = cva('max-w-max text-white', {
  variants: {
    size: {
      small: 'text-lg lg:text-xl',
      default: 'text-xl lg:text-2xl',
      medium: 'text-2xl lg:text-3xl',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof ParagraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
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

Paragraph.displayName = 'Paragraph';

export default Paragraph;
