import { useRouter } from "next/router";

export function usePreselectedResource(): string | null {
  const router = useRouter();

  if (!router.asPath.includes("#")) {
    return null;
  }

  return router.asPath.split("#")[1];
}
