import { ThemeToggle } from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { Search } from "@/lib/icons/Search";
import { useState } from "react";
import { View } from "react-native";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <View className="flex-row items-center gap-4">
      <Text className="text-primary text-2xl font-raleway-bold">Groceries</Text>
      <Input
        LeftIcon={() => <Search className="mr-2 text-primary" size={20} />}
        onChangeText={setSearch}
        value={search}
        placeholder="search products"
        className="flex-1"
      />
      <ThemeToggle />
    </View>
  );
};
export default Header;
