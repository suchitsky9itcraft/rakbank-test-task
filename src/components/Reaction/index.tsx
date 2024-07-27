import React from 'react'

export type ReactionItem = {
    reaction: string;
    icon: string;
    tooltip: string;
}   

type ReactionsProps = {
  items: ReactionItem[];
  onClick: (reaction: string) => void;
};

const Reactions: React.FC<ReactionsProps> = ({
  items,
  onClick,
}: ReactionsProps) => {
  return (
    <div className="flex gap-16">
      {items.map((item) => (
        <div
          key={item.reaction}
          className="flex flex-col items-center text-5xl transition-transform duration-100 ease-in-out transform cursor-pointer group hover:scale-95 active:scale-90"
          onClick={() => onClick(item.icon)}
        >
          {item.icon}
          <span className="mt-4 text-sm transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100 text-main">
            {item.tooltip}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Reactions;