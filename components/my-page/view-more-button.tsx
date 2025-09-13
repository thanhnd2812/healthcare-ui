'use client';

import { GradientButton } from '../ui/gradient-button';

interface ViewMoreButtonProps {
  onClick?: () => void;
  className?: string;
}

export function ViewMoreButton({ onClick, className }: ViewMoreButtonProps) {
  return (
    <div className={`flex justify-center py-8 ${className}`}>
      <GradientButton
        size="lg"
        onClick={onClick}
        className="px-24 py-4 text-lg font-light"
      >
        記録をもっと見る
      </GradientButton>
    </div>
  );
}
