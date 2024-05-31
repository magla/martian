import { CommonProps } from "../../types";

interface ButtonProps extends CommonProps {}

const componentName = "Button";

const Button = (props: ButtonProps) => {
  useEffect(() => {
    console.log(`${props.message} ${componentName}`);
  }, []);
};

export default Button;
