import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";

// Files
import { Input } from "@/components/ui/input";
import { loginSchema, LoginValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { User } from "@/lib/icons/User";
import { Lock } from "@/lib/icons/Lock";
import { Eye } from "@/lib/icons/Eye";
import { EyeOff } from "@/lib/icons/EyeOff";
import { useState } from "react";

const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    reset,
    getValues,
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    mode: "all",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [secure, setSecure] = useState(true);

  const onLoginPress: SubmitHandler<LoginValues> = async (data) => {};

  return (
    <View>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <>
            <Input
              LeftIcon={() => <User className="mr-2 text-primary" size={20} />}
              field={field}
              trigger={trigger}
              error={errors.username?.message}
              contextMenuHidden={true} // no pasting of username
              label="Username"
              placeholder="abc@demo.com"
            />
          </>
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <>
            <Input
              secureTextEntry={secure}
              LeftIcon={() => <Lock className="mr-2 text-primary" size={20} />}
              field={field}
              trigger={trigger}
              className="mt-10"
              error={errors.password?.message}
              label="Password"
              placeholder="*********"
              RightIcon={() =>
                secure ? (
                  <TouchableOpacity onPress={() => setSecure(false)}>
                    <Eye className="mr-2 text-primary" size={20} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setSecure(true)}>
                    <EyeOff className="mr-2 text-primary" size={20} />
                  </TouchableOpacity>
                )
              }
            />
          </>
        )}
      />

      <Button
        onPress={handleSubmit(onLoginPress)}
        className="mt-10"
        variant={"default"}
        // disabled={true}
      >
        <Text className="font-bold">Login</Text>
      </Button>
    </View>
  );
};

export default LoginForm;
