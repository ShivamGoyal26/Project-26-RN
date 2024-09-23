import { View } from "react-native";

// Files
import CustomHeader from "@/components/CustomHeader";
import CategoriesList from "../home/components/CategoriesListing";

const Categories = () => {
  return (
    <View className="p-4 flex-1">
      <CustomHeader className="mb-10" title="Categories" />
      <CategoriesList hide />
    </View>
  );
};

export default Categories;
