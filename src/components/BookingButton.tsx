/**
 * Compatibility component for legacy "book a free call" buttons.
 * The approved client journey is now entirely asynchronous: written quote request.
 * No public Firestore booking or unmoderated calendar reservation is performed.
 */
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { getLanguageFromPath, getLocalizedPath } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';
import type { ButtonHTMLAttributes, ReactNode, MouseEvent } from 'react';

type CompatibleButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'disabled' | 'title'> & {
  lang?: Language;
  children?: ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  [key: string]: unknown;
};

export function BookingButton({lang, children: _previousCallLabel, asChild: _previousSlot, onClick: _oldClick, ...props}: CompatibleButtonProps) {
  void _previousCallLabel;
  void _previousSlot;
  void _oldClick;
  const pathname = useLocation().pathname;
  const language = lang || getLanguageFromPath(pathname);
  const labels: Record<Language, string> = {
    it: 'Richiedi un preventivo scritto',
    en: 'Request a written quote',
    fr: 'Demander un devis écrit',
    es: 'Solicitar presupuesto por escrito',
  };
  const label = labels[language];
  return (
    <Button {...props} aria-label={label} asChild>
      <Link to={`${getLocalizedPath('contact', language)}#contact-section`}>{label}</Link>
    </Button>
  );
}
