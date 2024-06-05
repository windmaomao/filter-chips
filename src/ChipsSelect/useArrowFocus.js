import { useState, useEffect } from 'react';

const useArrowFocus = (count, onEnter) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function onKeyPress(e) {
      if (e.keyCode === 40) {
        setIndex(v => (v === count - 1 ? v : v + 1));
      } else if (e.keyCode === 38) {
        setIndex(v => (v === 0 ? 0 : v - 1));
      } else if (e.keyCode === 13) {
        onEnter?.(index);
      }
    }

    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, [index, count, onEnter]);

  return [index];
};

export default useArrowFocus;
