import type { Hass } from '../types/homeassistant';
import { HassContext } from './HassContext';

interface HassProviderProps {
  hass: Hass;
  children: React.ReactNode;
}

export function HassProvider({ hass, children }: HassProviderProps) {
  return <HassContext.Provider value={hass}>{children}</HassContext.Provider>;
}
