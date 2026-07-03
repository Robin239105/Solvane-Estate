import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  useOutlet,
  ScrollRestoration,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout Chrome
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AgeGateModal from "./components/layout/AgeGateModal";
import CartDrawer from "./components/shop/CartDrawer";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Vintages from "./pages/Vintages";
import Estate from "./pages/Estate";
import Vineyard from "./pages/Vineyard";
import Winemaking from "./pages/Winemaking";
import TastingRoom from "./pages/TastingRoom";
import WineClub from "./pages/WineClub";
import Events from "./pages/Events";
import Journal from "./pages/Journal";
import JournalArticle from "./pages/JournalArticle";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShippingPolicy from "./pages/ShippingPolicy";

// Shared Layout Wrapper
const Layout = () => {
  const location = useLocation();
  const outlet = useOutlet();

  return (
    <div className="flex flex-col min-h-screen relative bg-[#FBF8F3] text-left">
      <Header />

      <main className="flex-grow">
        {/* AnimatePresence with keys to trigger page transitions on route changes */}
        <AnimatePresence mode="wait">
          {outlet && React.cloneElement(outlet, { key: location.pathname })}
        </AnimatePresence>
      </main>

      <Footer />
      <AgeGateModal />
      <CartDrawer />

      {/* Scroll restoration on navigation */}
      <ScrollRestoration />
    </div>
  );
};

// Router Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/:slug", element: <ProductDetail /> },
      { path: "/vintages", element: <Vintages /> },
      { path: "/estate", element: <Estate /> },
      { path: "/estate/vineyard", element: <Vineyard /> },
      { path: "/estate/winemaking", element: <Winemaking /> },
      { path: "/tasting-room", element: <TastingRoom /> },
      { path: "/wine-club", element: <WineClub /> },
      { path: "/events", element: <Events /> },
      { path: "/journal", element: <Journal /> },
      { path: "/journal/:slug", element: <JournalArticle /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/privacy-policy", element: <PrivacyPolicy /> },
      { path: "/terms-of-service", element: <TermsOfService /> },
      { path: "/shipping-policy", element: <ShippingPolicy /> },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
