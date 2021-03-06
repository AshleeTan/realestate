import styled from "styled-components";
import BrandingBar from "../BrandingBar";
import ListerDetails from "./ListerDetails";

const Container = styled.div`
  width: 300px;
  margin-left: 40px;
  border-radius: 3px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #D2D5DA;
`;

const ListingCompanyName = styled.a`
  display: block;
  font-family: "PangeaRegular";
  font-size: 16px;
  line-height: 24px;
  color: #2B6ED2;
  margin-top: 12px;
  margin-left: 16px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  };
`;

const ListingCompanyAddress = styled.div`
  font-family: "PangeaRegular";
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: #333F48;
  margin: 4px 16px 12px 16px;
`;

const EmailEnquiryLink = styled.a`
  display: inline-block;
  text-align: center; 
  box-sizing: border-box;
  background-color: #E4002B;
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  border-radius: 3px;
  width: calc(100% - 32px);
  padding: 12px 24px;
  margin: 16px;
  text-decoration: none;
`;

const AgentFloatingWidget = (props) => {
  const address = props.listingCompany.address.display.fullAddress;
  const agentName = props.listingCompany.name;
  const agentCompanyLink = props.listingCompany._links.canonical.href;

  return(
    <Container>
      <a target="_blank" rel="noreferrer" href={agentCompanyLink}>
        <BrandingBar listingCompany={props.listingCompany} height="44" topBorderRadius="3" />
      </a>
      {
        props.listers.map((item, index, array) => {
          return <ListerDetails key={index} lister={item} shouldDisplayDivider={index !== array.length - 1} />
        })
      }
      <Divider />
      <ListingCompanyName target="_blank" rel="noreferrer" href={agentCompanyLink}>{agentName}</ListingCompanyName>
      <ListingCompanyAddress>{address}</ListingCompanyAddress>
      <Divider />
      <EmailEnquiryLink href="#enquiry-form">Get in touch</EmailEnquiryLink>
    </Container>
  );
}

export default AgentFloatingWidget;