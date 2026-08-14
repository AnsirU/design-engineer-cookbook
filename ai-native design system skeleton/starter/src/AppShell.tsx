import * as React from 'react';

export type AppShellProps = {
  navigation: React.ReactNode;
  header?: React.ReactNode;
  children: React.ReactNode;
};

export function AppShell({navigation, header, children}: AppShellProps) {
  return (
    <div data-ds-component="AppShell" className="ds-app-shell">
      <aside className="ds-app-shell__nav">{navigation}</aside>
      <div className="ds-app-shell__main">
        {header ? <header className="ds-app-shell__header">{header}</header> : null}
        <main className="ds-app-shell__content">{children}</main>
      </div>
    </div>
  );
}
