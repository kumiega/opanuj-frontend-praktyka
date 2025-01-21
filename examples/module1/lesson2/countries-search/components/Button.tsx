interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  onClick,
  color = 'blue',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`text-white bg-${color}-700 hover:bg-${color}-800 focus:outline-none focus:ring-4 focus:ring-${color}-300 font-medium rounded-full text-sm px-5 py-1.5 text-center disabled:bg-gray-400`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
