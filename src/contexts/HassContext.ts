import { createContext } from 'react';
import type { Hass } from '../types/homeassistant';

export const HassContext = createContext<Hass | null>(null);
