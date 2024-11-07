import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col text-center">
          <SyncLoader color="red" size={45} />
        </div>
      </div>
    </div>
  );
};

export default Loader;
