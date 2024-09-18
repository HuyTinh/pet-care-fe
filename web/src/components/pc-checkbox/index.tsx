import "./styles.scss";

export const PCCheckBox = () => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <input
          type="checkbox"
          defaultChecked
          className="checkbox-green checkbox bg-white"
        />
        <span className="label-text px-2 text-white">Remember me</span>
      </label>
    </div>
  );
};
