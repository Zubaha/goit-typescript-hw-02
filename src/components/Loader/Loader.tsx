import { Audio } from "react-loader-spinner";
import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.container}>
      <Audio
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        visible={true}
        wrapperClass={css.loader}
      />
    </div>
  );
}

export default Loader;
