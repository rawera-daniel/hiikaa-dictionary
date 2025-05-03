import { Trash2 } from "lucide-react";

export default function DeleteButton({
  onClick,
  className = "",
  icon: Icon = Trash2,
  size = "h-5 w-5",
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-red-600 p-2 cursor-pointer hover:text-red-700 hover:bg-red-50 rounded ${className}`}
    >
      <Icon className={size} />
    </button>
  );
}
