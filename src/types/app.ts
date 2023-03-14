import type { FC } from "react";
import type { NextPage } from "next";

export type NextPageWithLayout<T> = NextPage<T> & {
  Layout?: FC<React.PropsWithChildren<unknown>>;
};

export enum ProjectCategory {
  PACKAGING = "Packaging",
  UX_UI = "UX/UI",
  INDUSTRIAL = "Industrial",
  OTHER = "OTHER",
}
