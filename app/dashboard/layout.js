import HeadDashboard from "../_components/HeadDashboard";
import Sidebar from "../_components/Sidebar";

export default function layout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 shrink-0">
        <Sidebar />
      </aside>
      <div className="flex-1">
        <HeadDashboard />
        <div className="p-6 h-full bg-gray-200">{children}</div>
      </div>
    </div>
  );
}
