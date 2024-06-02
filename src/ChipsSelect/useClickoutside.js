import { useEffect } from 'react';

const useClickoutside = (ref, handler) => {
  useEffect(() => {
    const evt = e => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) {
        handler && handler();
      }
    };
    window.addEventListener('mousedown', evt);
    return () => {
      window.removeEventListener('mousedown', evt);
    };
  }, [ref, handler]);
};

export default useClickoutside;
