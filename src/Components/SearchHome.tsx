import { useState, useEffect } from 'react';
import '../style/TestForm.css';
import '../style/Search.css';
import { FormInputSearchVariation, FormInputType, ListType } from '@digi/arbetsformedlingen';

import { useSearch } from '../functions/useSearch';
import { useCompetency } from '../functions/useCompetency';
import { CustomDigiFormInputSearch, CustomDigiList } from '../style/StyledComponents';
import { OccupationMenu } from './OccupationMenu';

export const SearchHome = () => {
  const { relatedOccupations, search } = useSearch();
  const { competencies, selectedOccupationId, loadCompetencies } = useCompetency();

  const [titelInput, setTitelInput] = useState<string>("");
  const [hasSearched, setHasSearched] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (name: string, value: string) => {
    if (name === "titelInput") {
      setTitelInput(value);
      // Clearing the previous data before a new search
      search(value);
      setHasSearched(true);
    }
  };

  useEffect(() => {
    if (hasSearched && relatedOccupations.length === 0) {
      const timer = setTimeout(() => {
        setShowError(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [hasSearched, relatedOccupations]);

  return (
    <div>
      <div className="searchWrapper">
        <div className="searchInput">
          <CustomDigiFormInputSearch
            afLabel="Hitta relaterade yrken"
            afVariation={FormInputSearchVariation.LARGE}
            afType={FormInputType.SEARCH}
            value={titelInput}
            afButtonText="Sök"
            onAfOnChange={(e) => handleChange("titelInput", (e.target as unknown as HTMLInputElement).value)}
          />
        </div>
      </div>

      {hasSearched && showError && relatedOccupations.length === 0 ? (
        <div className="error-message">
          <h3>Inga yrken hittades vid din sökning. Tips för att förbättra din sökning</h3>
          <CustomDigiList afListType={ListType.BULLET}>
            <li>Kontrollera din stavning</li>
            <li>Byt ut eller ta bort ett sökord</li>
          </CustomDigiList>
        </div>
      ) : (
        relatedOccupations.length > 0 && (
          <>
            <div className="searchResultWrapper">
              <h1>Relevanta yrken:</h1>
              <OccupationMenu
                occupations={relatedOccupations}
                competencies={competencies}
                selectedOccupationId={selectedOccupationId}
                onCompetencyClick={loadCompetencies}
              />
            </div>
          </>
        )
      )}
    </div>
  );
};
