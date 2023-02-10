import { useCallback, useState } from 'react';

type Toggle = [boolean, () => void, () => void];

export default function useToggle(initialState = false): Toggle {
  const [isToggled, setToggled] = useState<boolean>(initialState);

  const onToggleOn = useCallback(() => {
    setToggled(true);
  }, [setToggled]);

  const onToggleOff = useCallback(() => {
    setToggled(false);
  }, [setToggled]);

  return [isToggled, onToggleOn, onToggleOff];
}
