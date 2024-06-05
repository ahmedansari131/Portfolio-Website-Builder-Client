import { useId } from "react";
import { useDispatch } from "react-redux";
import { dropdownActive } from "../../app/slices/dropdown/dropdownSlice";

const useDropdownControl = () => {
  const dispatch = useDispatch();
  const generateId = useId();
  const dropdownId = "dropdownId-" + generateId;

  const toggleDropdown = (dropdownId) => {
    dispatch(
      dropdownActive({
        dropdownId: dropdownId,
      })
    );
  };

  return { toggleDropdown, dropdownId };
};

export default useDropdownControl;
