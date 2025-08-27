import "../plasmic-init";
import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/host";

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/plasmic-init';

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
