import { useState } from 'react';
import { IOccupation } from '../models/RelatedOccupationsInterface';
import { getRelatedOccupationsFromApi } from '../services/ApiResponseService';
import { generateSubstrings } from '../functions/generateSubstrings';

export const useSearch = () => {
  const [relatedOccupations, setRelatedOccupations] = useState<IOccupation[]>([]);

  const search = async (inputValue: string) => {
    const substrings: string[] = generateSubstrings(inputValue);
    const withRe = substrings.map((substring) => substring + "re");
    const withEr = substrings.map((substring) => substring + "er");
    const combinedArray = substrings.concat(withRe);
    const combinedArrayBoth = combinedArray.concat(withEr);
    const modifiedInput = combinedArrayBoth.join(" ");

    const data = await getRelatedOccupationsFromApi(modifiedInput);
    if (data) {
      setRelatedOccupations(data);
    }
  };

  return {
    relatedOccupations,
    search
  };
};
