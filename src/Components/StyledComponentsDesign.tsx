import { ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen"



import { CustomDigiButton } from "../style/StyledComponents"



export const StyledComponentsDesign = () => {
    return (
      <>
         
        <CustomDigiButton
         afSize={ButtonSize.LARGE}
         afVariation={ButtonVariation.PRIMARY}
         afFullWidth={false}>
         Stor knapp
        </CustomDigiButton>
  
        <CustomDigiButton
          afSize={ButtonSize.MEDIUM}
          afVariation={ButtonVariation.SECONDARY}
          afFullWidth={false}
        >
            
          LIten knapp
        </CustomDigiButton>
      </>
    );
  };