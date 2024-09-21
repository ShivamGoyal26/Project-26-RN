import React from "react";
import { View } from "react-native";

// Files
import { Text } from "@/components/ui/text";
import LoginForm from "./components/login-form";
import { ThemeToggle } from "@/components/ThemeToggle";

const Login = () => {
  return (
    <View className="flex-1 p-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-2xl text-primary">Welcome</Text>
        <ThemeToggle />
      </View>
      <Text className="text-lg mb-32">Let's get in</Text>
      <LoginForm />
    </View>
  );
};

export default Login;
