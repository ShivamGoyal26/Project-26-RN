import useGetCurrentLocation from "@/hooks/useGetCurrentLocation";
import { ScrollView, View } from "react-native";

// Files
import Header from "./components/Header";
import { LocateFixedIcon } from "@/lib/icons/Location";
import { Text } from "@/components/ui/text";
import CategoriesList from "./components/CategoriesListing";
import CustomCarsoual from "./components/CustomCarsoual";

const Home = () => {
  const { location, locationName } = useGetCurrentLocation();

  return (
    <View className="p-4 flex-1">
      <Header />
      <View className="flex-row items-center mt-2 mb-10 gap-2">
        <LocateFixedIcon className="mr-2 text-primary" size={20} />
        <Text className="line-clamp-2 flex-1">{locationName}</Text>
      </View>
      <ScrollView>
        <CustomCarsoual />
        <CategoriesList />
      </ScrollView>
    </View>
  );
};

export default Home;
