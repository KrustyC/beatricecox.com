import "../styles/globals.css";
import { Bodoni_Moda } from "@next/font/google";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useRouter } from "next/router";
import type { NextPageWithLayout } from "@/types/app";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import netlifyIdentity from "netlify-identity-widget";
import { useState, useEffect } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { HomePageOverlayContext } from "@/contexts/HomePageOverlayContext";

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout<Readonly<unknown>>;
  pageProps: { protected: boolean };
};

// If loading a variable font, you don't need to specify the font weight
const bodoni = Bodoni_Moda({ subsets: ["latin"], variable: "--font-bodoni" });

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || DefaultLayout;

  const router = useRouter();

  const [isHomepageOverlayVisible, setisHomepageOverlayVisible] = useState(
    router.pathname === "/"
  );

  const [user, setUser] = useState<netlifyIdentity.User | null>(null);

  useEffect(() => {
    netlifyIdentity.on("init", (user) => {
      setUser(user);
    });

    netlifyIdentity.on("login", (user) => {
      if (router.asPath.includes("/#access_token")) {
        router.push("/admin");
      }
      setUser(user);
    });

    // on logout
    netlifyIdentity.on("logout", () => {
      setUser(null);
    });

    // connect with Netlify Identity
    netlifyIdentity.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = () => {
    netlifyIdentity.open("login");
  };

  const logout = () => {
    netlifyIdentity.logout();
  };

  const onHideHomepageOverlayVisible = () => setisHomepageOverlayVisible(false);

  if (pageProps.protected && !user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-admin-grey text-gray-700">
        <h1 className="text-gray-400 font-bold">Beatrice Duguid Cox</h1>

        <button
          className="px-4 py-3 rounded-md mt-8 font-bold bg-gray-800 text-white"
          onClick={login}
        >
          Log In with Netlify Identity
        </button>
        <p className="mt-4">This is a private area. please log in to view.</p>
      </div>
    );
  }

  const authContext = {
    login,
    logout,
    user,
    authReady: !!user,
  };

  const homePageOverlayContext = {
    isVisible: isHomepageOverlayVisible,
    hide: onHideHomepageOverlayVisible,
  };

  return (
    <>
      <main className={`${bodoni.variable} font-sans`}>
        <AuthContext.Provider value={authContext}>
          <HomePageOverlayContext.Provider value={homePageOverlayContext}>
            <Layout>
              <Component {...pageProps} />
            </Layout>

            <div id="floating-button-root" />
          </HomePageOverlayContext.Provider>
        </AuthContext.Provider>
      </main>
      {process.env.environment === "production" && (
        <>
          <Script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.googleAnalyticsId}`}
          />
          <Script id="ga-script" strategy="afterInteractive">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', '${process.env.googleAnalyticsId}');
                `}
          </Script>
        </>
      )}
    </>
  );
}
