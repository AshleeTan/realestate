import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import styled from "styled-components";

import { getPropertyDetail as get } from '../../mockBackend/fetch';
import Hero from "./Hero";
import BrandingBar from "./BrandingBar";
import HomeLoanCalculator from "./HomeLoanCalculator";
import AgentFloatingWidget from "./AgentFloatingWidget";
import Map from "./Map";
import TravelTime from "./TravelTime";
import PropertyDiscription from "./PropertyDiscription";
import PropertyFeatures from "./PropertyFeatures";
import FloorplansAndTours from "./FloorplansAndTours";
import FullScreenGallery from "./FullScreenGallery";

const Container = styled.div`
  background-color: #FFF;
`;

const PropertyInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const PropertyInfoStack = styled.div`
  width: 640px;
`;

const Divider = styled.div`
  margin: 24px 0;
  height: 1px;
  background-color: #D2D5DA;
`;

const PropertyDetail = () => {
  const [shouldDisplayFullScreenGallery, setShouldDisplayFullScreenGallery] = useState(false);
  const { propertyId } = useParams();
  
  const [listing, setListing] = useState(null);
  useEffect(() => {
    get(propertyId).then((response) => {
      setListing(response.data);
    });
  }, [propertyId]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const openFullScreenGallery = (index) => {
    setSelectedImageIndex(index);
    setShouldDisplayFullScreenGallery(true);
  };

  const closeFullScreenGallery = () => {
    setShouldDisplayFullScreenGallery(false);
  };

  if (listing === null) {
    return <div>Loading...</div>;
  }

  const address = listing.listing.address.display.fullAddress;
  const listingCompany = listing.listing.listingCompany;

  return (
    <Container>
      {
        shouldDisplayFullScreenGallery ? <FullScreenGallery selectedIndex={selectedImageIndex} floorPlans={listing.listing.media.floorplans} images={listing.listing.media.images} closeFullScreenImage={closeFullScreenGallery}/> :
        <div>
          <BrandingBar listingCompany={listingCompany} />
          <Hero listing={listing.listing} openFullScreenImage={openFullScreenGallery}/>
          <PropertyInfo>
            <PropertyInfoStack>
              <HomeLoanCalculator />
              <Divider />
              <Map mapAddress={listing.listing.address.display} />
              <Divider />
              <TravelTime travelFromAddress={address}/>
              <Divider />
              <PropertyDiscription address={address} propertyTitle={listing.listing.title} propertyDiscription={listing.listing.description}/>
              <Divider />
              <PropertyFeatures propertyFeatures={listing.listing.propertyFeatures} />
              <Divider />
              <FloorplansAndTours openFullScreenImage={openFullScreenGallery} floorPlanIndex={listing.listing.media.images.length} />
            </PropertyInfoStack>
            <AgentFloatingWidget listingCompany={listingCompany}/>
          </PropertyInfo>
          footer
        </div>
      }
      
    </Container>
  )
};

export default PropertyDetail;