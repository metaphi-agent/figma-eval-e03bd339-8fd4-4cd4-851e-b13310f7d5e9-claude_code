import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-base font-medium text-[--color-text-dark]">
          {label}
        </label>
      )}
      <input
        className={`w-full border border-[--color-border] rounded-[10px] px-5 py-4 text-base text-[--color-text] placeholder:text-[--color-text-muted] focus:outline-none focus:border-[--color-primary] transition-colors ${
          error ? 'border-[--color-red-accent]' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-[--color-red-accent]">{error}</span>}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function Textarea({ label, error, className = '', ...props }: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-base font-medium text-[--color-text-dark]">
          {label}
        </label>
      )}
      <textarea
        className={`w-full border border-[--color-border] rounded-[10px] px-5 py-4 text-base text-[--color-text] placeholder:text-[--color-text-muted] focus:outline-none focus:border-[--color-primary] transition-colors resize-none ${
          error ? 'border-[--color-red-accent]' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-[--color-red-accent]">{error}</span>}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, error, options, className = '', ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-base font-medium text-[--color-text-dark]">
          {label}
        </label>
      )}
      <select
        className={`w-full border border-[--color-border] rounded-[10px] px-5 py-4 text-base text-[--color-text] focus:outline-none focus:border-[--color-primary] transition-colors appearance-none bg-white bg-[url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>')] bg-no-repeat bg-[position:right_1rem_center] ${
          error ? 'border-[--color-red-accent]' : ''
        } ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-[--color-red-accent]">{error}</span>}
    </div>
  );
}
