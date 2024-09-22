import { View } from "react-native";
import CategoriesList from "../home/components/CategoriesLlist";
import CustomHeader from "@/components/CustomHeader";

// Files

const Cart = () => {
  return (
    <View className="p-4 flex-1">
      <CustomHeader title="Categories" />
      <CategoriesList />
    </View>
  );
};

export default Cart;
