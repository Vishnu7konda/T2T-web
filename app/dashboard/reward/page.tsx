"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Gift, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const rewards = [
  {
    id: 1,
    name: "Coffee Shop Voucher",
    desc: "₹100 voucher for your favorite coffee chain",
    points: 200,
    img: "/rewards/coffee.png",
    tag: { label: "Popular", color: "bg-green-600" },
    available: true,
    creditsText: "200 Credits",
  },
  {
    id: 2,
    name: "Eco Bamboo Bottle",
    desc: "Sustainable bamboo water bottle - 500ml",
    points: 350,
    img: "/rewards/bamboo.png",
    tag: { label: "Eco", color: "bg-blue-500" },
    available: true,
    creditsText: "350 Credits",
  },
  {
    id: 3,
    name: "Shopping Voucher",
    desc: "₹500 voucher for major shopping malls",
    points: 950,
    img: "/rewards/shopping.png",
    tag: null,
    available: true,
    creditsText: "950 Credits",
  },
  {
    id: 4,
    name: "OTT Video Subscription",
    desc: "1-Month premium streaming pass for movies & TV",
    points: 400,
    img: "/rewards/ott.png",
    tag: { label: "Digital", color: "bg-purple-600" },
    available: true,
    creditsText: "400 Credits",
  },
  {
    id: 5,
    name: "Starbucks Gift Card",
    desc: "Premium handcrafted beverage voucher",
    points: 300,
    img: "/rewards/starbucks.png",
    tag: { label: "Food", color: "bg-orange-500" },
    available: true,
    creditsText: "300 Credits",
  },
  {
    id: 6,
    name: "Burger King Meal",
    desc: "Free Whopper meal combo voucher",
    points: 250,
    img: "/rewards/burgerking.png",
    tag: { label: "Food", color: "bg-orange-500" },
    available: true,
    creditsText: "250 Credits",
  },
  {
    id: 7,
    name: "McDonald's Pass",
    desc: "Value meal voucher for crispy sides & burgers",
    points: 250,
    img: "/rewards/mcdonalds.png",
    tag: { label: "Food", color: "bg-orange-500" },
    available: true,
    creditsText: "250 Credits",
  },
  {
    id: 8,
    name: "Domino's Pizza Pass",
    desc: "Free medium pizza with cheese burst",
    points: 450,
    img: "/rewards/dominos.png",
    tag: { label: "Food", color: "bg-orange-500" },
    available: true,
    creditsText: "450 Credits",
  },
];

const userCredits = 150;
const nextRewardCredits = 200;
const creditsToNext = nextRewardCredits - userCredits;

export default function RewardPage() {
  return (
    <section className="w-full relative z-10 p-2">
      {/* Reward Header Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl flex flex-col md:flex-row items-center p-8 gap-8 mb-12 shadow-2xl relative overflow-hidden"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none" />

        {/* Left text area */}
        <div className="flex-1 min-w-[230px] z-10">
          <h2 className="font-extrabold text-white text-2xl md:text-3xl mb-2 flex items-center gap-2 drop-shadow-md">
            Turn Your Impact Into Rewards! <Gift className="inline-block h-8 w-8 text-yellow-300 drop-shadow-md ml-1 -mt-1" />
          </h2>
          <p className="text-white/90 text-sm md:text-lg mb-6 max-w-lg drop-shadow-sm">
            Redeem your credits for amazing, premium eco-friendly rewards and keep making a difference.
          </p>
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl p-4 w-full max-w-sm shadow-inner">
            <div className="text-sm text-white font-semibold mb-2 drop-shadow-sm">
              {`You're just ${creditsToNext} credits away from your next reward`}
            </div>
            <div className="w-full bg-black/20 rounded-full h-3 relative overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(userCredits / nextRewardCredits) * 100}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="bg-gradient-to-r from-green-300 to-yellow-300 h-full rounded-full"
              />
            </div>
          </div>
        </div>
        {/* Right image area */}
        <motion.div
          initial={{ scale: 0.9, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5 }}
          className="shrink-0 flex items-center justify-center z-10"
        >
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            <Image
              src="/rewards/banner.png"
              alt="Gifts with recycling icons"
              fill
              className="object-cover rounded-2xl shadow-xl shadow-black/20 border-2 border-white/40"
              priority
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Rewards Header & Progress */}
      <div className="flex items-end justify-between flex-wrap gap-4 mb-8 pl-1">
        <div>
          <h2 className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-1">
            Available Premium Rewards
          </h2>
          <div className="flex items-center text-sm text-gray-500 gap-2 font-medium">
            <span>Sort by:</span>
            <span className="flex items-center font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition">
              Credits (Low <span className="mx-1">→</span> High)
            </span>
          </div>
        </div>
      </div>
      {/* Rewards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {rewards.map((reward, i) => (
          <motion.div
            key={reward.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <Card className="group flex flex-col h-full bg-glass shadow-xl rounded-2xl overflow-hidden border border-white/50 hover:shadow-2xl transition-all duration-300 relative">
              {/* Tag label */}
              {reward.tag && (
                <span
                  className={`${reward.tag.color} text-white px-4 py-1.5 absolute top-4 left-4 text-xs font-bold rounded-full shadow-md z-10`}
                >
                  {reward.tag.label}
                </span>
              )}
              {/* Reward Image */}
              <div className="relative w-full h-48 bg-gradient-to-tr from-gray-50 to-gray-100">
                <Image
                  src={reward.img}
                  alt={reward.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Reward Info */}
              <CardHeader className="pb-2 pt-5 px-6">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                  {reward.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-1 flex flex-col flex-1 justify-between">
                <p className="text-sm text-muted-foreground font-medium mb-4 leading-relaxed line-clamp-2">
                  {reward.desc}
                </p>
                <div className="flex items-center justify-between gap-3 mt-auto">
                  <span className="text-green-700 font-extrabold text-lg flex items-center gap-1 bg-green-50 px-3 py-1 rounded-lg">
                    <Star className="h-5 w-5 text-yellow-500 mr-0.5 fill-yellow-500" />
                    {reward.creditsText}
                  </span>
                  <Button
                    className="bg-gradient-eco text-white font-bold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    Redeem
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}