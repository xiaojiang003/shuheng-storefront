import { cn } from '@/lib/cn';
import { ChevronDown } from 'lucide-react';
import { useState, type ReactNode } from 'react';

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
  className?: string;
}

export function Accordion({ items, defaultOpen, className }: AccordionProps) {
  const [openId, setOpenId] = useState(defaultOpen ?? items[0]?.id);

  return (
    <div className={cn('divide-y divide-border border border-border rounded-card', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              id={`accordion-${item.id}`}
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
              onClick={() => setOpenId(isOpen ? '' : item.id)}
              className="flex w-full items-center justify-between bg-surface-alt px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide"
            >
              {item.title}
              <ChevronDown
                className={cn('size-4 transition-transform', isOpen && 'rotate-180')}
                aria-hidden
              />
            </button>
            <div
              id={`panel-${item.id}`}
              role="region"
              aria-labelledby={`accordion-${item.id}`}
              hidden={!isOpen}
              className="px-4 py-4 text-sm text-muted"
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
