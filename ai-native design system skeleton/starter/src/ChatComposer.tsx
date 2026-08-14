import * as React from 'react';

export type ContextItem = {
  id: string;
  kind: 'file' | 'image' | 'tool' | 'skill';
  label: string;
};

export type ChatComposerProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  context?: ContextItem[];
  onRemoveContext?: (id: string) => void;
  busy?: boolean;
  disabled?: boolean;
  placeholder?: string;
  toolbar?: React.ReactNode;
  renderRemoveIcon?: () => React.ReactNode;
};

export function ChatComposer({
  value,
  onChange,
  onSubmit,
  context = [],
  onRemoveContext,
  busy = false,
  disabled = false,
  placeholder = 'Ask anything…',
  toolbar,
  renderRemoveIcon,
}: ChatComposerProps) {
  const canSubmit = !disabled && (value.trim().length > 0 || context.length > 0);

  return (
    <div data-ds-component="ChatComposer" data-busy={busy || undefined} className="ds-chat-composer">
      {context.length > 0 ? (
        <div className="ds-chat-composer__context" aria-label="Attached context">
          {context.map(item => (
            <span key={item.id} data-kind={item.kind} className="ds-context-chip">
              <span>{item.label}</span>
              {onRemoveContext ? (
                <button type="button" aria-label={`Remove ${item.label}`} onClick={() => onRemoveContext(item.id)}>
                  {renderRemoveIcon ? renderRemoveIcon() : <span>Remove</span>}
                </button>
              ) : null}
            </span>
          ))}
        </div>
      ) : null}

      <textarea
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
        onKeyDown={event => {
          if (event.key === 'Enter' && !event.shiftKey && canSubmit) {
            event.preventDefault();
            onSubmit();
          }
        }}
      />

      <div className="ds-chat-composer__bar">
        <div>{toolbar}</div>
        <button type="button" disabled={!canSubmit} onClick={onSubmit} aria-label={busy ? 'Stop generation' : 'Send'}>
          {busy ? 'Stop' : 'Send'}
        </button>
      </div>
    </div>
  );
}
