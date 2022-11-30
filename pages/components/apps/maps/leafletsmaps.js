import React from 'react'
import dynamic from "next/dynamic";
const Leafletmaps = dynamic(() => import("../../../../shared/data/map/leafletmaps"), {
  ssr: false
});

import Seo from '../../../../shared/layout-components/seo/seo'
const leafletsmap = () => {
  return (
    <div>
        <Seo title="Leflets Maps"/>
        <Leafletmaps/>
      
    </div>
  )
}
leafletsmap.layout = "Contentlayout"
export default leafletsmap