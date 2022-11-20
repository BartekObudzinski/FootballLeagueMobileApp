export type UseScreenEffectHook = (
  callback: () => void | (() => void),
  deps: any[],
) => void;
