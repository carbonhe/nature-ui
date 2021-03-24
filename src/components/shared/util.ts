import { ComponentPublicInstance, VNode } from 'vue';

export const namespaceCls = 'nt';

export function getPrefixCls(suffix: string): string {
  return `${namespaceCls}-${suffix}`;
}

export function defaultSlot(componentInstance: ComponentPublicInstance): VNode[] {
  const slot = componentInstance.$slots.default;

  return slot ? slot() : [];
}

export function defineObject<T>(object: T): T {
  return object;
}

export function coerceBoolean(source: unknown): boolean {
  return !!source;
}
