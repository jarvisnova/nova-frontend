// src/components/ModeGrid.jsx
import { ModeCard } from "@/components/ui/modecard";
import {
  Brain,
  BookOpen,
  Flame,
  Rocket,
  Bot,
  Smile,
  Baby,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

export default function ModeGrid({ onModeSelect }) {
  const modes = [
    {
      id: "story",
      title: "Story Mode",
      icon: <Flame />,
      description: "Create powerful viral stories.",
    },
    {
      id: "explain",
      title: "Explain Mode",
      icon: <BookOpen />,
      description: "Explain any topic like a pro.",
    },
    {
      id: "knowledge",
      title: "Knowledge Mode",
      icon: <Brain />,
      description: "Deliver expert-level insights.",
    },
    {
      id: "bhabhi",
      title: "Bold Bhabhi 18+",
      icon: <Smile />,
      description: "Desi fantasy storytelling (18+)",
    },
    {
      id: "kids",
      title: "Kids Mode",
      icon: <Baby />,
      description: "Safe & fun content for kids.",
    },
    {
      id: "trending",
      title: "Trending Mode",
      icon: <TrendingUp />,
      description: "Use viral trends in your reels.",
    },
    {
      id: "coach",
      title: "Auto-Coach",
      icon: <Bot />,
      description: "Get AI suggestions to grow faster.",
    },
    {
      id: "learn",
      title: "Learning Mode",
      icon: <Lightbulb />,
      description: "Learn topics deeply via scenes.",
    },
    {
      id: "creator",
      title: "Creator Dashboard",
      icon: <Rocket />,
      description: "Control your uploads & earnings.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {modes.map((mode) => (
        <ModeCard key={mode.id} {...mode} onClick={() => onModeSelect(mode.id)} />
      ))}
    </div>
  );
}
