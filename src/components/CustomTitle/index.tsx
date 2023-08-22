import * as C from "./style";

interface CustomTitle {
  subtitle: string;
  title: string;
}

const CustomTitle = (props: CustomTitle) => {
  return (
    <C.CustomTitle>
      <p>{props.subtitle}</p>
      <h1>{props.title}</h1>
    </C.CustomTitle>
  );
};

export default CustomTitle;
