// eslint-disable-next-line
import { components } from 'react-select';

const Checkbox = (props: any) => {
  return (
    //TODO check div
    <div>
      <components.Option {...props}>
        <input
          className="checkbox"
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        //TODO CHEck span
        <span className="checkbox_span"></span>
        <label className="lable">{props.label}</label>
      </components.Option>
    </div>
  );
};
export default Checkbox;
