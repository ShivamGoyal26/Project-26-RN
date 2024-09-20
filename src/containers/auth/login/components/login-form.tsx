import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { View } from "react-native";

// Files
import { Input } from "@/components/ui/input";
import { loginSchema, LoginValues } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

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

  const onLoginPress: SubmitHandler<LoginValues> = async (data) => {};

  return (
    <View>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <>
            <Input
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
              field={field}
              trigger={trigger}
              className="mt-10"
              error={errors.password?.message}
              label="Password"
              placeholder="*********"
            />
          </>
        )}
      />

      <Button
        onPress={handleSubmit(onLoginPress)}
        className="mt-10"
        variant={"default"}
      >
        <Text className="font-bold">Login</Text>
      </Button>
    </View>
  );
};

export default LoginForm;
