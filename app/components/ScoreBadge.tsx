import React from "react";

interface ScoreBadgeProps {
  score: number;
}

const getBadgeProps = (score: number) => {
  if (score >= 70) {
    return {
      bg: "bg-badge-green text-green-600",
      label: "Strong",
    };
  } else if (score > 49) {
    return {
      bg: "bg-badge-yellow text-yellow-700",
      label: "Good Start",
    };
  } else {
    return {
      bg: "bg-badge-red text-red-600",
      label: "Needs Work",
    };
  }
};

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score }) => {
  const { bg, label } = getBadgeProps(score);
  return (
    <div className={`inline-block px-3 py-1 rounded-full font-semibold text-xs shadow-sm ${bg}`}>
      <p>{label}</p>
    </div>
  );
};

export default ScoreBadge;

