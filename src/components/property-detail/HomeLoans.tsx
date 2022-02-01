import styled from "styled-components";
import { useState } from "react";
import { Question } from "@styled-icons/evil";
import DropDown from "../common/DropDown";

const Container = styled.div `
  margin-top: 24px;
`;

const HomeLoansTitleContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h2 `
  font-family: "PangeaRegular";
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  color: #333F48;
  margin: 0 0 12px;
`;

const HomeLoansLogo = styled.img `
  width: 197px;
  height: 32px;
`;

const FirstHomeBuyerContainer = styled.div `
  display: flex;
  align-items: flex-start;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(233, 235, 237);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
  padding: 13px 10px 13px 15px;
`;

const FirstHomeBuyerRemarks = styled.div `
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #000;
  font-family: "PangeaRegular";
  padding-right: 16px;
  max-width: 182px;
`;

const FindOutLink = styled.a `
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: white;
  font-family: "PangeaRegular";
  background-color: #E4002B;
  text-decoration: none;
  border-radius: 3px 3px;
  padding: 6px 16px;
`;

const HomeLoansTabContainer = styled.div `
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
`;

const HomeLoansTab = styled.button `
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  padding: 8px 22px;
  margin-bottom: 2px;
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  };
`;

const Divider = styled.div `
  height: 1px;
  background-color: #D2D5DA;
`;

const SelectIndicator = styled.div `
  height: 2px;
  width: 100%;
  background-color: rgb(228, 0, 43);
`;

const CalculatorDetails = styled.div `
  display: flex;
  justify-content: space-between;
  padding-top: 25px;
`;

const PropertyPriceContainer = styled.div `
  padding: 25px 15px 18px 15px;
  background-color: rgb(247, 248, 249);
  border-color: rgb(233, 235, 237);
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
`;

const PropertyPriceTitle = styled.div `
  font-family: "PangeaRegular";
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  padding-bottom: 8px;
`;

const PriceContainer = styled.div `
  border-radius: 3px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(105, 118, 132);
  font-family: "PangeaLight";
  background-color: white;
  padding-left: 6px;
`;

const DollarSign = styled.span `
  font-size: 24px;
  font-weight: 400;
  line-height: 26px;
`;

const PriceInput = styled.input `
  padding: 16px 16px 16px 6px;
  border-width: 0;
  font-size: 24px;
  font-weight: 400;
  line-height: 26px;
  &:focus {
    outline: none;
  }
  
  /* Chrome, Safari, Edge, Opera */
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };

  /* Firefox */
  -moz-appearance: textfield;
`;

const ListedPrice = styled.div `
  padding-top: 12px;
  font-family: "PangeaLight";
  font-size: 14px;
  font-weight: 500px;
  line-height: 20px;
`;

const BuyerPropertyContainer = styled.div `
  margin-bottom: 14px;
`;

const LoanPreferenceContainer = styled.div `
  font-family: "PangeaLight";
  font-size: 16px;
  font-weight: 300;
  line-height: 1.5em;
  padding: 25px 15px 18px 15px;
`;

const LoanPreferenceDetails = styled.div `
  display: flex;
  align-items: baseline;
  color: #333F48;
`;

const Discription = styled.span `
  padding-right: 4px;
`;

const InterestRateInputDetails = styled.input `
  border: none;
  width: 24px;
  font-family: "PangeaLight";
  color: rgb(5, 95, 180);
`;

const LoanPeriodInputDetails = styled.input `
  border: none;
  width: 16px;
  font-family: "PangeaLight";
  color: rgb(5, 95, 180);
`;

const PercetageContainer = styled.span `
  font-family: "PangeaLight";
  font-size: 16px;
  font-weight: 300;
  line-height: 1em;
  color: rgb(5, 95, 180);
`;

interface Props {
  listedPrice: string | number;
};

const HomeLoans = (props: Props) => {
  const [selectedIndicator, setSelectedIndicator] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const buyerOptions = [
    {
      key: 'first-home-buyer',
      display: 'are a first home buyer',
      isDefaultSelected: true,
    },
    {
      key: 'buyer',
      display: 'have previously bought',
      isDefaultSelected: false,
    }
  ];

  const propertyTypes = [
    {
      key: 'live-in',
      display: 'live in',
      isDefaultSelected: true,
    },
    {
      key: 'invest-in',
      display: 'invest in',
      isDefaultSelected: false,
    }
  ];

  const loanTypes = [
    {
      key: 'P&I',
      display: 'principal & interest',
      isDefaultSelected: true,
    },
    {
      key: 'IO',
      display: 'interest only',
      isDefaultSelected: false,
    }
  ];

  return (
  <Container>
    <HomeLoansTitleContainer>
      <div>
        <Title>Home Loans</Title>
        <a target="_blank" rel="noreferrer" href="https://www.realestate.com.au/home-loans/">
          <HomeLoansLogo alt="REA HomeLoans Logo" src="https://dam-assets.au.reastatic.net/image/upload/fl_sanitize/v1630457820/site-assets/realestate.com.au/finx/realestate.com.au-homeloans.svg" />
        </a>
      </div>
      <FirstHomeBuyerContainer>
        <FirstHomeBuyerRemarks>Are you eligible for the First Home Buyer Deposit Scheme?</FirstHomeBuyerRemarks>
        <FindOutLink target="_blank" href="https://www.realestate.com.au/home-loans/guides/all-about-the-first-home-loan-deposit-scheme?cid=cid:buy:PDP:calculator-lender-panel:offer-fhb-scheme">Find out</FindOutLink>
      </FirstHomeBuyerContainer>
    </HomeLoansTitleContainer>
    <HomeLoansTabContainer>
      <div>
        <HomeLoansTab onClick={() => {setSelectedIndicator('Calculator')}}>Calculator</HomeLoansTab>
        {selectedIndicator === 'Calculator' && <SelectIndicator />}
      </div>
      <div>
        <HomeLoansTab onClick={() => {setSelectedIndicator('Value guide')}}>Value guide</HomeLoansTab>
        {selectedIndicator === 'Value guide' && <SelectIndicator />}
      </div>
      <div>
        <HomeLoansTab onClick={() => {setSelectedIndicator('My home loan')}}>My home loan</HomeLoansTab>
        {selectedIndicator === 'My home loan' && <SelectIndicator />}
      </div>
    </HomeLoansTabContainer>
    <Divider />
    <CalculatorDetails>
      <div>
        <PropertyPriceContainer>
          <PropertyPriceTitle>What would you pay for this property?</PropertyPriceTitle>
          <PriceContainer>
            <DollarSign>$</DollarSign>
            <PriceInput onChange={(event) => {setPrice(event.target.value)}} value={price} type="number" placeholder="Enter your price"/>
          </PriceContainer>
          <ListedPrice>Listed price: {props.listedPrice} <Question size="24" title="Listed price:this is the price that the agent has listed this property for.  Suburn median: this is the middle of the total number of similar properties sold within this suburb over the past 12 months." /> </ListedPrice>
        </PropertyPriceContainer>
        <LoanPreferenceContainer>
          <div>
            <BuyerPropertyContainer>
              <LoanPreferenceDetails>
                <Discription>You've told us you </Discription><DropDown options={buyerOptions} /><span>,</span>
              </LoanPreferenceDetails>
              <LoanPreferenceDetails>
                <Discription>looking for a property to </Discription><DropDown options={propertyTypes} /><span>.</span>
              </LoanPreferenceDetails>
            </BuyerPropertyContainer>
            <LoanPreferenceDetails>
              <Discription>These calculations are based on a </Discription><DropDown options={loanTypes} />
            </LoanPreferenceDetails>
            <LoanPreferenceDetails>
              <Discription>loan with an interest rate of </Discription>
              <InterestRateInputDetails value="4.35" /><PercetageContainer>%</PercetageContainer>
            </LoanPreferenceDetails>
            <LoanPreferenceDetails>
              <Discription> and a loan term of </Discription>
              <span><LoanPeriodInputDetails value="30" /></span>
              <Discription> years.</Discription>
            </LoanPreferenceDetails>
          </div>
        </LoanPreferenceContainer>
      </div>
      <div>Estimated repayments</div>
    </CalculatorDetails>
    
  </Container>
  
  );
};

export default HomeLoans;