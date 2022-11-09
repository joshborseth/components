import { cva, type VariantProps } from "class-variance-authority";

type buttonProps = {
  children?: React.ReactNode;
  handleClick?: () => void;
};

interface Props extends buttonProps, VariantProps<typeof buttonStyles> {}

const buttonStyles = cva(
  "px-10 py-5 shadow-xl rounded-md text-white border-2 text-lg font-bold uppercase hover:scale-105 transition duration-150 ease-in-out active:scale-95",
  {
    variants: {
      intent: {
        primary: "bg-purple-900",
        secondary: "bg-pink-900",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed transition-none hover:scale-100 active:scale-100",
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

const Button = ({ intent, children, handleClick, disabled }: Props) => {
  return (
    <button
      disabled={disabled ? true : false}
      className={buttonStyles({ intent, disabled })}
      onClick={handleClick && handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
