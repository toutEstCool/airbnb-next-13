import { IconType } from "react-icons";

export interface CategoryBoxProps {
  key: string;
  label: string;
  description?: string;
  icon: IconType;
  selected?: boolean;
}