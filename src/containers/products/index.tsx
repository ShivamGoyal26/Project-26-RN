import { View } from "react-native";
import CategoriesList from "../home/components/CategoriesListing";
import CustomHeader from "@/components/CustomHeader";
import ProductsListing from "./components/ProductsListing";

// Files

const Products = () => {
  return (
    <View className="p-4 flex-1">
      <CustomHeader title="Products" />
      <ProductsListing />
    </View>
  );
};

export default Products;
