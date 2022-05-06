import type { FC } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<T> = NextPage<T> & {
  Layout?: FC;
};
