import { Home } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

const Login = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-raleway-regular text-foreground">
        Login screen
      </Text>
      <Home className="h-10 w-10 text-primary" />
    </View>
  );
};

export default Login;
