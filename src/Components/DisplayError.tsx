import { ErrorPageStatusCodes } from "@digi/arbetsformedlingen";
import { DigiNotificationErrorPage } from "@digi/arbetsformedlingen-react";
import { CustomDigiLinkInternal } from "../style/StyledComponents";

export const DisplayError = () => {
  return (
    <DigiNotificationErrorPage afHttpStatusCode={ErrorPageStatusCodes.NOT_FOUND}>
      <p slot="bodytext">
        Det kan bero på att länken hit är felaktig eller att sidan inte finns kvar. Prova att ladda om sidan, felet kan vara tillfälligt. Du kan även klicka på länken nedan för att komma tillbaka till
        startsidan.
      </p>
      <ul slot="links">
        <li>
          <CustomDigiLinkInternal
            afHref="/"
            afVariation="small"
          >
            Till startsidan
          </CustomDigiLinkInternal>
        </li>
      </ul>
    </DigiNotificationErrorPage>
  );
};
