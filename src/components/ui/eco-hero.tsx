import React from 'react';
import { EcoButton } from './eco-button';

type EcoHeroProps = {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  primaryCta?: {
    text: string;
    onClick: () => void;
  };
  secondaryCta?: {
    text: string;
    onClick: () => void;
  };
  impactTicker?: {
    label: string;
    value: string;
  };
  className?: string;
};

export function EcoHero({
  title,
  subtitle,
  backgroundImage,
  primaryCta,
  secondaryCta,
  impactTicker,
  className = ''
}: EcoHeroProps) {
  return (
    <section className={`relative overflow-hidden bg-[var(--ec-secondary)] ${className}`}>
      {backgroundImage && (
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-30" 
            alt="" 
            src={backgroundImage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ec-secondary)]/80 to-[var(--ec-secondary)]/40" />
        </div>
      )}
      
      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="max-w-4xl">
          <h1 className="font-[var(--ec-f-display)] text-5xl md:text-6xl font-semibold leading-tight text-[var(--ec-n-0)] mb-4">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-[var(--ec-n-100)] max-w-2xl mb-8 leading-relaxed">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {primaryCta && (
              <EcoButton 
                variant="primary" 
                size="lg"
                onClick={primaryCta.onClick}
                className="bg-[var(--ec-brand)] hover:bg-[var(--ec-brand-600)]"
              >
                {primaryCta.text}
              </EcoButton>
            )}
            {secondaryCta && (
              <EcoButton 
                variant="tertiary" 
                size="lg"
                onClick={secondaryCta.onClick}
                className="text-[var(--ec-n-0)] hover:bg-[var(--ec-n-0)]/10"
              >
                {secondaryCta.text}
              </EcoButton>
            )}
          </div>
          
          {impactTicker && (
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-[var(--ec-r-pill)] bg-[var(--ec-n-0)]/10 backdrop-blur">
              <div className="w-2 h-2 bg-[var(--ec-accent-sun)] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[var(--ec-n-0)]">
                {impactTicker.label}: <span className="tabular-nums">{impactTicker.value}</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}