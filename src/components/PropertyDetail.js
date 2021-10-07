import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getPropertyDetail as get } from '../mockBackend/fetch';


const PropertyDetail = () => {
  const { propertyId } = useParams();
  
  const [listing, setListing] = useState(null);
  useEffect(() => {
    get().then((response) => {
      setListing(response.data);
    });
  }, []);
  console.log(listing);
  return (
    <div>
      this is property detail page and the id is {propertyId}
    </div>
  )
};

export default PropertyDetail;