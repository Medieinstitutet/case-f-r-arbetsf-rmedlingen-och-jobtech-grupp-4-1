import { ICompetency } from "../models/CompentenciesInterface";
import { ListType, TypographyVariation } from "@digi/arbetsformedlingen";
import "../style/Competencies.css";
import { CustomDigiList, CustomDigiTypography } from "../style/StyledComponents";

interface competenciesProps {
  props: ICompetency[];
}

export const Competencies = ({ props }: competenciesProps) => {
  const competencies = props;
  const firstTenCompetencies = competencies.slice(0, 10);

  return (
    <>
      <div className="competencies">
        <CustomDigiTypography afVariation={TypographyVariation.LARGE}>
          <h2>Efterfrågade kompetenser</h2>
        </CustomDigiTypography>

        <CustomDigiTypography afVariation={TypographyVariation.SMALL}>
          <CustomDigiList afListType={ListType.BULLET}>
            {firstTenCompetencies.map((oneCompetency) => (
              <li key={oneCompetency.term}>
                <span>{oneCompetency.term.charAt(0).toUpperCase() + oneCompetency.term.slice(1)}</span>
              </li>
            ))}
          </CustomDigiList>
        </CustomDigiTypography>
      </div>
    </>
  );
};
