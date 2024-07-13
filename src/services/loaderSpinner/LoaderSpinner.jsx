import { ThreeCircles } from "react-loader-spinner";

export const LoaderSpiner = () => {
  return (
    <ThreeCircles
      visible={true}
      height="100"
      width="100"
      color="#eccd43"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};
