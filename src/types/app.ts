import type { FC } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<T> = NextPage<T> & {
  Layout?: FC<React.PropsWithChildren<unknown>>;
};

export enum Filters {
  ALL = "ALL",
  PACKAGING = "PACKAGING",
  UX_UI = "UX/UI",
  INDUSTRIAL = "INDUSTRIAL",
  THREED = "3D",
  OTHER = "OTHER",
}
