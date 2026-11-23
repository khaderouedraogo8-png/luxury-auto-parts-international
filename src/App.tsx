import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProductCategoryPage, ProductsPage } from "./pages/ProductsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { getProductBySlug } from "./data/products";

function CategoryRoute() {
  const { slug } = useParams();
  const item = slug ? getProductBySlug(slug) : undefined;
  if (!item) return <Navigate to="/produits" replace />;
  return <ProductCategoryPage slug={item.slug} />;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/produits" element={<ProductsPage />} />
        <Route path="/produits/:slug" element={<CategoryRoute />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
