import React, { ReactNode } from "react";
import { Pressable, View } from "react-native";
import clsx from "clsx";

type IconButtonVariant = "solid" | "outline" | "ghost";
type IconButtonSize = "sm" | "md" | "lg";

type IconButtonProps = {
  icon: ReactNode;
  onPress?: () => void;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  accessibilityLabel: string;
  className?: string;
};

export function IconButton({
  icon,
  onPress,
  variant = "ghost",
  size = "md",
  disabled = false,
  accessibilityLabel,
  className,
}: IconButtonProps) {
  const sizeClasses =
    size === "sm" ? "h-9 w-9" : size === "lg" ? "h-12 w-12" : "h-10 w-10"; // md

  const variantClasses =
    variant === "solid"
      ? "bg-blue-500 active:bg-blue-600"
      : variant === "outline"
        ? "border border-blue-500 active:bg-blue-500/10"
        : "active:bg-blue-500/10"; // ghost

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      className={clsx(
        "items-center justify-center rounded-xl",
        sizeClasses,
        variantClasses,
        disabled && "opacity-50",
        className
      )}
      hitSlop={10}
    >
      {/* Mantiene el icono centrado */}
      <View className="items-center justify-center">{icon}</View>
    </Pressable>
  );
}
