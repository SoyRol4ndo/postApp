import { Pressable, Text, View, ActivityIndicator } from "react-native";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "solid" | "outline" | "text";
type ButtonType = "default" | "error";

type ButtonProps = {
  title: string;
  variant?: ButtonVariant;
  type?: ButtonType;
  icon?: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export function Button({
  title,
  variant = "solid",
  type = "default",
  icon,
  onPress,
  disabled = false,
  loading = false,
}: ButtonProps) {
  const isError = type === "error";
  const isDisabled = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      className={clsx(
        "flex-row items-center justify-center gap-2 rounded-xl px-5 py-3",
        isDisabled && "opacity-50",

        // Variants & Types
        variant === "solid" &&
          (isError
            ? "bg-red-500 active:bg-red-600"
            : "bg-blue-500 active:bg-blue-600"),

        variant === "outline" &&
          (isError ? "border border-red-500" : "border border-blue-500"),

        variant === "text" &&
          (isError ? "active:bg-red-500/10" : "active:bg-blue-500/10")
      )}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={
            variant === "solid"
              ? "#fff"
              : isError
              ? "#ef4444" // Tailwind red-500
              : "#3b82f6" // Tailwind blue-500
          }
        />
      ) : (
        <>
          {icon && <View>{icon}</View>}
          <Text
            className={clsx(
              "text-sm font-bold uppercase",
              variant === "solid"
                ? "text-white"
                : isError
                ? "text-red-500"
                : "text-blue-500"
            )}
          >
            {title}
          </Text>
        </>
      )}
    </Pressable>
  );
}
