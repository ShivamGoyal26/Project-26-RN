import { Tabs } from "expo-router";

// Files
import { Home } from "@/lib/icons/Home";
import { ShoppingBag } from "@/lib/icons/Cart";
import { CircleDashed } from "@/lib/icons/Category";
import { User } from "@/lib/icons/User";
import { Pressable, View } from "react-native";

export default function TabLayout() {
  const screens = [
    {
      name: "home/index",
      label: "Home",
      icon: <Home className="text-foreground" size={20} />,
      selectedIcon: <Home className="text-primary" size={20} />,
      id: 1,
    },
    {
      name: "categories/index",
      label: "Categories",
      icon: <CircleDashed className="text-foreground" size={20} />,
      id: 2,
      selectedIcon: <CircleDashed className="text-primary" size={20} />,
    },
    {
      name: "cart/index",
      label: "Cart",
      icon: <ShoppingBag className="text-foreground" size={20} />,
      id: 3,
      selectedIcon: <ShoppingBag className="text-primary" size={20} />,
    },
    {
      name: "profile/index",
      label: "Profile",
      icon: <User className="text-foreground" size={20} />,
      id: 4,
      selectedIcon: <User className="text-primary" size={20} />,
    },
  ];

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}>
      {screens.map((screen) => {
        return (
          <Tabs.Screen
            key={screen.id}
            name={screen.name}
            options={{
              tabBarStyle: {
                borderTopWidth: 1,
                width: "100%",
                alignSelf: "center",
                padding: 0,
              },
              title: screen.label,
              tabBarButton: (props) => (
                <Pressable
                  onPress={props.onPress}
                  className="flex-1 justify-center items-center"
                >
                  {props.accessibilityState?.selected
                    ? screen.selectedIcon
                    : screen.icon}
                  {/* <Text className="line-clamp-1">{screen.label}</Text> */}
                </Pressable>
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
}
