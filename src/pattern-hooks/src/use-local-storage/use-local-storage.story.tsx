import React from 'react';
import { useLocalStorage } from './use-local-storage';

export default {
  title: 'Hooks/use-local-storage',
};

export function Usage() {
  const [value, setValue] = useLocalStorage<string>({
    key: '@pattern/localStorage/val',
    defaultValue: 'Value persists through reloads and changes across multiple tabs',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export function SerializeJson() {
  const [value, setValue] = useLocalStorage<{ pattern: string }>({
    key: '@pattern/localStorage/val',
    defaultValue: { pattern: 'is awesome' },
  });

  const [value2, setValue2] = useLocalStorage<{ pattern: string }>({
    key: '@pattern/localStorage/val',
    defaultValue: { pattern: 'is awesome' },
  });

  const [value3, setValue3] = useLocalStorage<{ pattern: string }>({
    key: '@pattern/localStorage/another-value',
    defaultValue: { pattern: 'is awesome' },
  });

  return (
    <div style={{ padding: 20 }}>
      <input
        value={value.pattern}
        onChange={(event) => setValue({ pattern: event.target.value })}
      />
      <input
        value={value2.pattern}
        onChange={(event) => setValue2({ pattern: event.target.value })}
      />
      <input
        value={value3.pattern}
        onChange={(event) => setValue3({ pattern: event.target.value })}
      />
    </div>
  );
}

export function SerializeBoolean() {
  const [value, setValue] = useLocalStorage<boolean>({
    key: '@pattern/localStorage/val',
    defaultValue: true,
  });

  return (
    <div style={{ padding: 20 }}>
      <input
        type="checkbox"
        checked={value}
        onChange={(event) => {
          setValue(event.currentTarget.checked);
        }}
      />
    </div>
  );
}

export function MultipleHooks() {
  const [value, setValue] = useLocalStorage<string>({
    key: 'some-value',
    defaultValue: '',
  });

  const [value2] = useLocalStorage<string>({
    key: 'some-value',
    defaultValue: '',
  });

  return (
    <div style={{ padding: 20 }}>
      <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <input value={value2} readOnly />
    </div>
  );
}
