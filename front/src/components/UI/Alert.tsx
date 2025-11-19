type AlertProps = {
  type: "info" | "success" | "warning" | "error";
  message: string;
};

export default function Alert({ type, message }: AlertProps) {
  return (
    <div role="alert" className={`alert alert-${type} alert-soft `}>
      <span>{message}</span>
    </div>
  );
}
