import React from "react";
import { View } from "react-native";

// Files
import { Text } from "@/components/ui/text";
import LoginForm from "./components/login-form";

const Login = () => {
  return (
    <View className="flex-1 p-4 ">
      <Text className="text-2xl text-primary">Welcome</Text>
      <Text className="text-lg mb-32">Let's get in</Text>
      <LoginForm />
    </View>
  );
};

export default Login;
