import { useTheme } from "react-native-paper";

import { theme } from "@/styles/theme";

type AppTheme = typeof theme;

export function useAppTheme() {
  return useTheme<AppTheme>()
}