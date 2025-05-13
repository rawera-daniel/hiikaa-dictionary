import { CheckCircle, Clock } from "lucide-react";
import HeadDashboard from "../_components/HeadDashboard";
import Sidebar from "../_components/Sidebar";

const recentActivityData = [
  {
    id: 1,
    name: "ABC",
    addedWord: "Hikkaa",
    status: "pending",
    date: "04/18/2025",
  },
  {
    id: 2,
    name: "EFD",
    addedWord: "Hikkaa",
    status: "confirmed",
    date: "12/08/2025",
  },
  {
    id: 3,
    name: "VFE",
    addedWord: "Hikkaa",
    status: "pending",
    date: "02/08/2025",
  },
  {
    id: 4,
    name: "GHI",
    addedWord: "Example",
    status: "confirmed",
    date: "01/15/2025",
  },
  {
    id: 5,
    name: "JKL",
    addedWord: "Another",
    status: "pending",
    date: "03/22/2025",
  },
];

export default function page() {
  const classnameHeader =
    "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500";

  const classnameBody =
    "tracking-wide px-6 py-4 text-sm text-gray-800 font-medium";

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold tracking-wide">Dashboard</h1>
      <div className="grid grid-cols-2 gap-8 w-3xl">
        {/* Total Words Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-gray-600 text-base font-medium pl-4 border-l-3 border-red-400 ml-2 py-1">
            <h2>Total Words</h2>
            <p className="text-2xl font-bold text-black mt-2">1,032</p>
          </div>
        </div>

        {/* Words Added Today div */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="text-gray-600 text-base font-medium pl-4 border-l-3 border-red-400 ml-2 py-1">
            <h2> Words Added Today</h2>
            <p className="text-2xl font-bold text-black mt-2">23</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-medium mb-4">Recent Activity</h2>
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead>
            <tr>
              <th className={classnameHeader}>No</th>
              <th className={classnameHeader}>Name</th>
              <th className={classnameHeader}>Added Word</th>
              <th className={classnameHeader}>Status</th>
              <th className={classnameHeader}>Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {recentActivityData.map((activity, index) => (
              <tr key={activity.id} className="hover:bg-gray-100">
                <td className={classnameBody}>{index + 1}</td>
                <td className={classnameBody}>{activity.name}</td>
                <td className={classnameBody}>{activity.addedWord}</td>
                <td className={classnameBody}>
                  <div className="flex items-center gap-2 -translate-x-2">
                    <span
                      className={`flex items-center gap-2 px-2 py-1 rounded-full ${
                        activity.status === "pending"
                          ? "bg-yellow-100 rounded-full text-yellow-700"
                          : "bg-green-100 text-green-00"
                      }`}
                    >
                      {activity.status === "pending" ? (
                        <Clock size={15} />
                      ) : (
                        <CheckCircle size={15} />
                      )}
                      {activity.status}
                    </span>
                  </div>
                </td>
                <td className={classnameBody}>{activity.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
