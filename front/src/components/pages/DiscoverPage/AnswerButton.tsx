import { ALL_OPTION_STRING } from "./DiscoverPage";

type AnswerCardProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  value: string;
};

export default function AnswerButton({ label, onClick, value }: AnswerCardProps) {
  return (
    <button
      onClick={onClick}
      value={value}
      className={`
        p-5 px-10 border-2
        rounded-4xl
        hover:bg-primary
        hover:text-white
        border-primary
        ${label === ALL_OPTION_STRING ? "bg-primary-content" : null}
      `}
    >
      {label}
    </button>
  );
}
