export interface IEducationsApiResult {
    data: {
      hits: IEducation[];
    }
}
  
export interface IEducation {
    id: string;
    code: string;
    education_description: string;
    education_form: string;
    education_provider_name: string; 
    education_title: string;
    education_type: string;
    eventSummary: {
      distance: boolean;
      paceOfStudyPercentage: [number];
    }
}