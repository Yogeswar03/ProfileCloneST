import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer
} from "recharts";

export default function SkillsChart() {
  const data = [
    { name: "Figma — 5 years", value: 30, color: "#4285F4" },
    { name: "User Testing — 5 years", value: 20, color: "#9C27B0" },
    { name: "Web Design — 3 years", value: 20, color: "#4CAF50" },
    { name: "Miro — 5 years", value: 10, color: "#FFC107" },
    { name: "SaaS — 4 years", value: 20, color: "#BDBDBD" }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 m-6">
      <h2 className="text-xl font-semibold">Top skills</h2>
      <p className="text-sm text-gray-500 mb-4">Verified by</p>

      <div className="flex flex-col md:flex-row items-center gap-6">
        
        {/* Chart container */}
        <div className="w-full md:w-1/3 h-48 relative flex items-center justify-center">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={5}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Centered text */}
          <div className="absolute flex flex-col items-center justify-center">
            <span className="text-lg font-bold">5</span>
            <span className="text-xs text-gray-500">SKILLS</span>
          </div>
        </div>

        {/* Skills list */}
        <div className="flex-1 space-y-3 w-full">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-gray-700">{item.name}</span>
              </div>
              <span className="bg-gray-100 px-2 py-0.5 rounded-full text-gray-600">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
