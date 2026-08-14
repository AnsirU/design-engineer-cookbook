import * as React from 'react';

export type FormFieldProps = {
  id: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  children: React.ReactElement;
};

export function FormField({id, label, description, error, required, children}: FormFieldProps) {
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <div data-ds-component="FormField" data-invalid={error ? '' : undefined}>
      <label htmlFor={id}>
        {label}{required ? <span aria-hidden="true"> *</span> : null}
      </label>
      {React.cloneElement(children, {
        id,
        required,
        'aria-invalid': Boolean(error) || undefined,
        'aria-describedby': describedBy,
      })}
      {description ? <div id={descriptionId}>{description}</div> : null}
      {error ? <div id={errorId} role="alert">{error}</div> : null}
    </div>
  );
}
