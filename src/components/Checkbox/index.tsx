import { components } from 'react-select';

const Checkbox = (props: any) => {
  return (
    <components.Option {...props}>
      <input
        className="checkbox"
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null}
      />
      <span className="checkbox_span"></span>
      <label className="lable">{props.label}</label>
    </components.Option>
  );
};
export default Checkbox;
