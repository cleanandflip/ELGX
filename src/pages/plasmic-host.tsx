import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-react';
import { PLASMIC } from '@/plasmic-init';

export default function PlasmicHost() {
  console.log('PLASMIC object:', PLASMIC);
  return PLASMIC && <PlasmicCanvasHost />;
}
