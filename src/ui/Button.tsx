import { Pressable, Text, View } from "react-native";
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
};

export function Button({
  title,
  variant = "solid",
  type = "default",
  icon,
  onPress,
  disabled = false,
}: ButtonProps) {
  const isError = type === "error";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={clsx(
        "flex-row items-center justify-center gap-2 rounded-xl px-5 py-3",
        disabled && "opacity-50",

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
    </Pressable>
  );
}
