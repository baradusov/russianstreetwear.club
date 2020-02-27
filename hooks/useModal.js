import { useState } from "react";

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  const setIsShowing = () => {
    setIsShowing(isShowing);
  };

  return {
    isShowing,
    setIsShowing
  };
};

export default useModal;