import { cn } from '@/lib/cn';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-pill text-sm font-bold uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      tone: {
        accent: 'bg-accent text-white hover:opacity-90',
        brand: 'bg-brand text-white hover:opacity-90',
        ghost: 'bg-transparent text-ink hover:bg-surface-alt',
        outline: 'border border-border bg-surface text-ink hover:bg-surface-alt',
      },
      size: {
        sm: 'px-4 py-2',
        md: 'px-6 py-3',
        lg: 'px-8 py-4',
      },
    },
    defaultVariants: { tone: 'accent', size: 'md' },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, tone, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ tone, size }), className)} {...props} />;
}
