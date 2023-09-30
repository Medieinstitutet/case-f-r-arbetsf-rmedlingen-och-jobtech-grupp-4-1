import { FormCheckboxVariation } from "@digi/arbetsformedlingen";
import { DigiFormCheckbox } from "@digi/arbetsformedlingen-react";
import { CustomDigiFormFilter } from "../style/StyledComponents";

export const EducationForm = () => {
  // Skriv ut alla formatat som existerar i API:et
  const educationsForm: string[] = [
    "Af arbetsmarknadsutbildning",
    "Folkhögskola",
    "Grundläggande vuxenutbildning",
    "Gymnasial vuxenutbildning",
    "Högskoleutbildning",
    "Konst- och kulturutbildning",
    "Kvalificerad yrkesutbildning",
    "Sfi",
    "Utbildning med endast tillsyn",
    "Vuxenutbildning",
    "Yrkeshögskoleutbildning",
  ];
  // Skriv ut alla format som existerar i API:et
  const educationsType: string[] = ["Kurs", "Kurspaket", "Program"];

  return (
    <div
      className="filters-row"
      style={{ display: "flex", justifyContent: "space-between", gap: "20px" }}
    >
      <>
        <CustomDigiFormFilter
          afFilterButtonText="Utbildningstyp"
          afSubmitButtonText="Filtrera"
        >
          {educationsType.map((type, index) => (
            <DigiFormCheckbox
              key={index}
              afLabel={type}
              value={type}
            />
          ))}
        </CustomDigiFormFilter>

        <CustomDigiFormFilter
          afFilterButtonText="Utbildningsform"
          afSubmitButtonText="Filtrera"
        >
          {educationsForm.map((form, index) => (
            <DigiFormCheckbox
              key={index}
              afLabel={form}
              value={form}
            />
          ))}
        </CustomDigiFormFilter>

        <CustomDigiFormFilter
          afFilterButtonText="Ort"
          afSubmitButtonText="Filtrera"
        >
          <DigiFormCheckbox afLabel="Val 1" />
          <DigiFormCheckbox
            afLabel="Endast utbildningar på distans"
            afVariation={FormCheckboxVariation.PRIMARY}
          />
        </CustomDigiFormFilter>
      </>
    </div>
  );
};
