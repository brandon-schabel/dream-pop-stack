import * as RadixCheckbox from "@radix-ui/react-checkbox";

export const Checkbox = () => (
  <div className="form-control">
    <label className="label cursor-pointer" htmlFor="c1">
      <RadixCheckbox.Root defaultChecked id="c1" className="checkbox checkbox-primary">
        <RadixCheckbox.Indicator>{/* <CheckIcon /> */}</RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <span className="label-text">Accept terms and conditions.</span>
    </label>
  </div>
);
