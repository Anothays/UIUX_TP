type AnswerCardProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function AnswerButton({ label, onClick }: AnswerCardProps) {
  return (
    <button
      onClick={onClick}
      value={label}
      className={`
        p-5 px-10 border-2
        rounded-4xl
        hover:bg-primary
        border-primary
      `}
    >
      {label}
    </button>
  );
}
