// CustomDigiButton.tsx
import styled from 'styled-components';
import { DigiButton, DigiExpandableAccordion, DigiFormFilter, DigiFormInputSearch, DigiLinkInternal, DigiList, DigiTypography } from '@digi/arbetsformedlingen-react';
import '@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/digi-arbetsformedlingen.css'
import { OccupationMenu } from '../Components/OccupationMenu';


export const CustomDigiButton = styled(DigiButton)`
 
 // Primary
  --digi--button--color--background--primary--default: darkorange;
  --digi--button--color--border--primary--default: darkorange;
  --digi--button--color--background--primary--hover: orange;
  --digi--button--color--border--primary--hover: orange;
  --digi--button--color--text--primary--default: white;
  
 // secondary

 --digi--button--color--background--secondary--default: white;
 --digi--button--color--background--secondary--hover: #ebe0cc;
 --digi--button--color--border--secondary--default: darkorange;
 --digi--button--color--border--secondary--hover: darkorange;
 --digi--color--text--secondary: darkorange;
`;



export const CustomDigiFormInputSearch = styled(DigiFormInputSearch)`
 
 // Primary
 --digi--focus-shadow:  0 0 0.225rem darkorange !important;
 .digi-form-input__input.sc-digi-form-input{
    border-color: transparent !important
 }
 button {
    background-color: darkorange !important;
    border: darkorange !important;

    &:hover {
        background-color: orange !important;
        border: orange !important;
    }
 }
  
 // secondary
 

`;

export const CustomDigiList = styled(DigiList)`
 
 // Primary
  
  
 // secondary

 
`;
export const CustomOccupationMenu = styled(OccupationMenu)`


  
  

`;


export const CustomDigiExpandableAccordion = styled(DigiExpandableAccordion)`

  // Primary styles
  .expandableContent{
   list-style: none;

  }

  
`;
export const CustomDigiTypography = styled(DigiTypography)`
 
 h2{
   text-align: center;
 }
 // Primary
  
  
 // secondary

 
`;
export const CustomDigiFormFilter = styled(DigiFormFilter)`
 
 // Primary
  
  
 // secondary

 
`;
export const CustomDigiLinkInternal = styled(DigiLinkInternal)`
 
 // Primary
  
  
 // secondary

 
`;























