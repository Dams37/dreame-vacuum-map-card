import { useContext } from 'react';
import { HassContext } from './HassContext';
import type { Hass } from '../types/homeassistant';

export function useHass(): Hass {
  const hass = useContext(HassContext);
  if (!hass) {
    throw new Error('useHass must be used within HassProvider');
  }
  return hass;
}

export function useAreaUnit(): string {
  const hass = useHass();
  return hass.config?.unit_system?.area ?? 'm²';
}
