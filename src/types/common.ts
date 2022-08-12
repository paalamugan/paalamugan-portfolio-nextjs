export type Argument<T> = T extends (...args: infer U) => unknown ? U : never;
