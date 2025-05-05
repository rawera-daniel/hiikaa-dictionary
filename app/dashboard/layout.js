import HeadDashboard from "../_components/HeadDashboard";
import Sidebar from "../_components/Sidebar";

export default function layout({ children }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 shrink-0">
        <Sidebar />
      </aside>
      <div className="flex-1 bg-gray-200 overflow-y-auto">
        <HeadDashboard />
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
