export interface ICompetenciesApiResult {
    data: {
        metadata: {
            enriched_candidates_term_frequency: {
                competencies: ICompetency[];
            }
        }
    }
}

export interface ICompetency {
    term: string;
    percent_for_occupation: number;
}