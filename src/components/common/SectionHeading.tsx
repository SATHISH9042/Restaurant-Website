import React from 'react';
import { clsx } from 'clsx';
import { Sparkles } from 'lucide-react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={clsx(
        'max-w-3xl mb-12 md:mb-16',
        align === 'center' && 'mx-auto text-center',
        align === 'left' && 'text-left',
        align === 'right' && 'ml-auto text-right',
        className
      )}
    >
      {eyebrow && (
        <div
          className={clsx(
            'inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5 shadow-sm',
            isDark
              ? 'bg-[#D4A359]/15 text-[#D4A359] border border-[#D4A359]/30'
              : 'bg-[#163E2D]/10 text-[#163E2D] border border-[#163E2D]/15'
          )}
        >
          <Sparkles className="w-3 h-3 text-[#D4A359]" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2
        className={clsx(
          'text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight mb-4',
          isDark ? 'text-[#FAF5EB]' : 'text-[#163E2D]'
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            'text-base sm:text-lg font-normal leading-relaxed',
            isDark ? 'text-[#FAF5EB]/80' : 'text-[#636363]'
          )}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative Golden Accent Underline */}
      <div
        className={clsx(
          'mt-4 flex items-center gap-2',
          align === 'center' && 'justify-center',
          align === 'left' && 'justify-start',
          align === 'right' && 'justify-end'
        )}
      >
        <span className="w-12 h-0.5 bg-[#D4A359]/50 rounded-full"></span>
        <span className="w-2.5 h-2.5 rotate-45 border border-[#D4A359] bg-[#D4A359]/20"></span>
        <span className="w-12 h-0.5 bg-[#D4A359]/50 rounded-full"></span>
      </div>
    </div>
  );
};
