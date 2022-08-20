import { NextComponentType } from "next";
import {
  forwardRef,
  Suspense,
  ForwardRefRenderFunction,
  ForwardRefExoticComponent,
  ComponentType,
} from "react";

interface WithSuspenseProps<P1> {
  fallback?: React.ReactNode | ((props: P1) => React.ReactNode);
}

type Argument<T> = T extends (...args: infer U) => any ? U : any;

export function withSuspense<
  T1 extends NextComponentType,
  P1 = {
    [K in keyof Argument<T1>[0]]: Argument<T1>[0][K];
  },
  RefArg = {
    [K1 in keyof P1]: K1 extends "ref" ? P1[K1] : never;
  }[keyof P1],
>(
  Component: ComponentType<P1>,
  { fallback }: WithSuspenseProps<P1> = {
    fallback: <div className="skeleton-loading rounded-lg w-full h-full" />,
  },
) {
  const SuspenseComponent: ForwardRefRenderFunction<RefArg, P1> = (props, ref) => {
    return (
      <Suspense fallback={typeof fallback === "function" ? fallback(props) : fallback}>
        <Component ref={ref} {...props} />
      </Suspense>
    );
  };

  return forwardRef(SuspenseComponent) as ForwardRefExoticComponent<P1>;
}
