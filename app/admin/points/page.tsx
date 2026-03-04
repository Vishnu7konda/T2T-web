"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, TrendingUp, Award, Calendar } from "lucide-react";

// If you want stricter typing, add types/interfaces for pointsStats and recentTransactions

const pointsStats = [
  {
    title: "Total Points Awarded",
    value: "126,100",
    subtitle: "+2,450 this month",
    icon: Coins,
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Avg Points/Submission",
    value: "42.5",
    subtitle: "+1.2 from last month",
    icon: TrendingUp,
    color: "from-green-500 to-green-700",
  },
  {
    title: "Top Earner",
    value: "4,870",
    subtitle: "Priya Sharma",
    icon: Award,
    color: "from-blue-500 to-blue-700",
  },
];

const recentTransactions = [
  {
    id: "1",
    user: "Amit Patel",
    submissionId: "SUB-1234",
    points: 100,
    wasteType: "Electronic Waste",
    date: "2024-01-20 14:32",
  },
  {
    id: "2",
    user: "Rahul Kumar",
    submissionId: "SUB-1235",
    points: 50,
    wasteType: "Plastic Bottles",
    date: "2024-01-20 13:18",
  },
  {
    id: "3",
    user: "Vijay Singh",
    submissionId: "SUB-1236",
    points: 45,
    wasteType: "Metal Cans",
    date: "2024-01-20 11:42",
  },
  {
    id: "4",
    user: "Anita Rao",
    submissionId: "SUB-1237",
    points: 25,
    wasteType: "Plastic Bags",
    date: "2024-01-20 10:15",
  },
  {
    id: "5",
    user: "Priya Sharma",
    submissionId: "SUB-1238",
    points: 30,
    wasteType: "Paper Waste",
    date: "2024-01-19 16:48",
  },
  {
    id: "6",
    user: "Sneha Reddy",
    submissionId: "SUB-1239",
    points: 40,
    wasteType: "Glass Bottles",
    date: "2024-01-19 15:22",
  },
  {
    id: "7",
    user: "Karthik Nair",
    submissionId: "SUB-1240",
    points: 35,
    wasteType: "Cardboard",
    date: "2024-01-19 14:05",
  },
  {
    id: "8",
    user: "Deepa Singh",
    submissionId: "SUB-1241",
    points: 55,
    wasteType: "Batteries",
    date: "2024-01-19 12:30",
  },
];

export default function PointsHistoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Points History</h1>
        <p className="text-gray-600 mt-1">Track all point transactions and rewards</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {pointsStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-gray-200">
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-90 transition-opacity ${stat.color}`}></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold text-gray-500">{stat.title}</p>
                  <div className={`w-10 h-10 rounded-xl text-white flex items-center justify-center shadow-sm bg-gradient-to-br ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-900">{stat.value}</h4>
                  <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${stat.title === "Top Earner" ? "text-blue-600" : "text-green-600"}`}>
                    <TrendingUp className="h-4 w-4" />
                    {stat.subtitle}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Transaction History */}
      <Card className="overflow-hidden border-gray-200 shadow-sm">
        <CardHeader className="bg-gray-50/50 border-b pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Calendar className="h-5 w-5 text-gray-500" />
            Recent Transactions
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50/20">
                  <th className="text-left py-4 px-6 font-semibold text-gray-600 text-sm">Transaction ID</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-600 text-sm">User</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-600 text-sm">Waste Type</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-600 text-sm">Points</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-600 text-sm">Date & Time</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-6">
                      <code className="text-sm bg-gray-100 px-2.5 py-1.5 rounded-md font-mono text-gray-700">
                        {transaction.submissionId}
                      </code>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                          {transaction.user.charAt(0)}
                        </div>
                        <span className="font-medium text-gray-900">{transaction.user}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600 font-medium">{transaction.wasteType}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-amber-500 font-medium">🪙</span>
                        <span className="text-lg font-bold text-green-600">
                          +{transaction.points}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-500 text-sm">{transaction.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
