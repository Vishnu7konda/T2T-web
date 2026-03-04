"use client";

import { useState, useEffect, useCallback } from "react";
import { Clock, Check, X, Coins, Users as UsersIcon, RefreshCw, Broadcast, ArrowUp, ArrowDown } from "lucide-react";

interface Stat {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: React.ComponentType<any>;
  gradient: string;
}

interface Activity {
  id: number;
  user: string;
  action: string;
  details: string;
  time: string;
  status: "new" | "verified" | "rejected";
}

interface Submission {
  id: number;
  userName: string;
  userEmail: string;
  image: string;
  wasteType: string;
  location: string;
  submissionDate: string;
  status: "pending" | "verified" | "rejected";
  points: number;
  description: string;
  userId: string;
}

const mockActivities: Activity[] = [
  { id: 1, user: 'Priya Sharma', action: 'submitted new waste item', details: 'Plastic bottles from Hyderabad', time: '2 minutes ago', status: 'new' },
  { id: 2, user: 'Rajesh Kumar', action: 'earned 35 points', details: 'Aluminum cans verified', time: '5 minutes ago', status: 'verified' },
  { id: 3, user: 'Anitha Reddy', action: 'submission rejected', details: 'Glass bottles - quality issues', time: '8 minutes ago', status: 'rejected' },
  { id: 4, user: 'Venkat Rao', action: 'submitted new waste item', details: 'Cardboard boxes from Karimnagar', time: '12 minutes ago', status: 'new' },
  { id: 5, user: 'Lakshmi Devi', action: 'earned 20 points', details: 'Paper waste verified', time: '15 minutes ago', status: 'verified' }
];

const mockSubmissions: Submission[] = [
  {
    id: 1,
    userId: 'USR001',
    userName: 'Priya Sharma',
    userEmail: 'priya.sharma@gmail.com',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400',
    wasteType: 'Plastic Bottles',
    location: 'Hyderabad, Telangana',
    submissionDate: '1/15/2025 04:00 PM',
    status: 'pending',
    points: 0,
    description: 'Collection of 15 plastic water bottles from office premises'
  },
  {
    id: 4,
    userId: 'USR004',
    userName: 'Venkat Rao',
    userEmail: 'venkat.rao@gmail.com',
    image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400',
    wasteType: 'Cardboard Boxes',
    location: 'Karimnagar, Telangana',
    submissionDate: '1/15/2025 04:50 PM',
    status: 'pending',
    points: 0,
    description: 'Large cardboard boxes from electronics packaging'
  },
  {
    id: 2,
    userId: 'USR002',
    userName: 'Rajesh Kumar',
    userEmail: 'rajesh.kumar@gmail.com',
    image: 'https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&w=400',
    wasteType: 'Aluminum Cans',
    location: 'Warangal, Telangana',
    submissionDate: '1/15/2025 02:45 PM',
    status: 'verified',
    points: 35,
    description: 'Aluminum beverage cans collected from local market'
  }
];

export default function AdminDashboard() {
  const [loading, setLoading] = useState(false);
  const [activities, setActivities] = useState<Activity[]>(mockActivities);

  const stats: Stat[] = [
    {
      title: "Pending Submissions",
      value: "5",
      change: "+5 from yesterday",
      changeType: "positive",
      icon: Clock,
      gradient: "from-amber-400 to-amber-600",
    },
    {
      title: "Verified Today",
      value: "0",
      change: "+4 from yesterday",
      changeType: "positive",
      icon: Check,
      gradient: "from-emerald-500 to-emerald-700",
    },
    {
      title: "Rejected Today",
      value: "0",
      change: "-1 from yesterday",
      changeType: "negative",
      icon: X,
      gradient: "from-red-500 to-red-700",
    },
    {
      title: "Points Awarded",
      value: "98",
      change: "+320 from yesterday",
      changeType: "positive",
      icon: Coins,
      gradient: "from-violet-500 to-violet-700",
    },
    {
      title: "Active Users",
      value: "5",
      change: "+23 this week",
      changeType: "positive",
      icon: UsersIcon,
      gradient: "from-blue-500 to-blue-700",
    },
  ];

  const refreshData = () => {
    setLoading(true);
    setTimeout(() => {
      setActivities([
        { id: Date.now(), user: 'Venkat Rao', action: 'submitted new waste item', details: 'Activity from Karimnagar', time: 'Just now', status: 'new' },
        ...mockActivities
      ]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Overview</h1>
        <p className="text-gray-500 text-lg">Monitor and manage your Trash2Treasure Telangana system</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:shadow-md">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-blue-600"></div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-gray-500">{stat.title}</h3>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${stat.gradient} shadow-inner`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <div className={`flex items-center text-sm font-medium ${stat.changeType === 'positive' ? 'text-emerald-600' : 'text-red-500'}`}>
                {stat.changeType === 'positive' ? <ArrowUp className="w-4 h-4 mr-1" /> : <ArrowDown className="w-4 h-4 mr-1" />}
                {stat.change}
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-time Feed */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex items-center gap-3">
            <RadioIcon className="w-6 h-6 text-slate-700" />
            <h2 className="text-xl font-bold text-slate-800">Real-time Activity Feed</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 font-medium bg-white px-3 py-1.5 rounded-full border border-gray-200">
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-emerald-600' : ''}`} />
            Auto-refresh: ON
          </div>
        </div>
        <div className="max-h-[400px] overflow-y-auto">
          {activities.map((activity) => (
            <div key={activity.id} className="p-4 border-b border-gray-50 flex items-center gap-4 hover:bg-gray-50/80 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold text-sm shadow-sm flex-shrink-0">
                {activity.user.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900">
                  {activity.user} <span className="font-normal text-gray-600">{activity.action}</span>
                </p>
                <p className="text-sm text-gray-500 truncate">{activity.details}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs text-gray-400 font-medium mb-1">{activity.time}</p>
                <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide
                  ${activity.status === 'new' ? 'bg-blue-100 text-blue-700' :
                    activity.status === 'verified' ? 'bg-emerald-100 text-emerald-700' :
                      'bg-red-100 text-red-700'}
                `}>
                  {activity.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">Recent Submissions</h2>
          <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
            View All
          </button>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockSubmissions.map((sub, i) => (
            <div key={i} className={`bg-white rounded-xl border p-5 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
              ${sub.status === 'pending' ? 'border-amber-400 bg-gradient-to-br from-amber-50 to-white' :
                sub.status === 'verified' ? 'border-emerald-400 bg-gradient-to-br from-emerald-50 to-white' :
                  'border-red-400 bg-gradient-to-br from-red-50 to-white'}`}>

              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-sm z-10
                ${sub.status === 'pending' ? 'bg-amber-500' : sub.status === 'verified' ? 'bg-emerald-500' : 'bg-red-500'}`}>
                {sub.status}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                  {sub.userName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 leading-tight">{sub.userName}</h4>
                  <p className="text-xs text-gray-500">{sub.userId} • {sub.userEmail}</p>
                </div>
              </div>

              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden relative group cursor-pointer">
                <img src={sub.image} alt={sub.wasteType} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-medium bg-black/50 px-3 py-1.5 rounded-lg backdrop-blur-sm">View Image</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between items-center py-1 border-b border-gray-200/50">
                  <span className="text-sm text-gray-500 font-medium">Waste Type:</span>
                  <span className="text-sm font-semibold text-gray-900">{sub.wasteType}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-200/50">
                  <span className="text-sm text-gray-500 font-medium">Location:</span>
                  <span className="text-sm font-semibold text-gray-900">{sub.location}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-200/50">
                  <span className="text-sm text-gray-500 font-medium">Submitted:</span>
                  <span className="text-sm font-semibold text-gray-900">{sub.submissionDate}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-gray-200/50">
                  <span className="text-sm text-gray-500 font-medium">Points:</span>
                  <span className="text-sm font-bold text-gray-900">{sub.points}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2 mt-4">
                <span className="font-medium text-gray-500">Description:</span> {sub.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Custom icon since Broadcast isn't exactly like the one in HTML potentially
function RadioIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
      <circle cx="12" cy="12" r="2" />
      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
    </svg>
  );
}