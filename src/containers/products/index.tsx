import { TouchableOpacity, View } from "react-native";
import CategoriesList from "../home/components/CategoriesListing";
import CustomHeader from "@/components/CustomHeader";
import ProductsListing from "./components/ProductsListing";
import { StepBack } from "@/lib/icons/Back";
import { useRouter } from "expo-router";

// Files

const Products = () => {
  const router = useRouter();
  return (
    <View className="p-4 flex-1">
      <CustomHeader
        LeftIcon={() => (
          <TouchableOpacity onPress={() => router.back()}>
            <StepBack className="mr-2 text-primary" size={20} />
          </TouchableOpacity>
        )}
        title="Products"
      />
      <ProductsListing />
    </View>
  );
};

export default Products;
