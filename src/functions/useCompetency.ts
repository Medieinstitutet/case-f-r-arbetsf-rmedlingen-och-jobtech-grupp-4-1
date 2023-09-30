import { useState } from 'react';
import { ICompetency } from '../models/CompentenciesInterface';
import { getCompetenciesFromApi } from '../services/ApiResponseService';

export const useCompetency = () => {
  const [competencies, setCompetencies] = useState<ICompetency[]>([]);
  const [selectedOccupationId, setSelectedOccupationId] = useState<string | null>(null);

  const loadCompetencies = async (occupationId: string) => {
    if (selectedOccupationId === occupationId) {
      setSelectedOccupationId(null);
      setCompetencies([]);
      return;
    }

    const data = await getCompetenciesFromApi(occupationId);
    if (data) {
      setCompetencies(data);
      setSelectedOccupationId(occupationId);
    }
  };

  return {
    competencies,
    selectedOccupationId,
    loadCompetencies
  };
};
