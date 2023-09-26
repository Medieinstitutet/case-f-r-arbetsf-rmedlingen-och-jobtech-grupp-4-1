import { IOccupation } from "../models/RelatedOccupationsInterface";
import { DigiExpandableAccordion } from "@digi/arbetsformedlingen-react";
import { Competencies } from "./Competencies";
import { ICompetency } from "../models/CompentenciesInterface";
import { WorkDescription } from './WorkDescription';
import { Educations } from "./Educations";
import { useState } from "react";
import { EducationFunction } from "./EducationFunction";

interface Props {
    occupations: IOccupation[];
    competencies: ICompetency[];
    selectedOccupationId: string | null;
    onCompetencyClick: (occupationId: string) => void;
}

export const OccupationMenu = ({ occupations, competencies, selectedOccupationId, onCompetencyClick }: Props) => {
    const { educations, activeEducationId, handleClickToGetEducations } = EducationFunction();
    const [activeSsyk, setActiveSsyk] = useState<string | null>(null);
    const [expandedAccordionId, setExpandedAccordionId] = useState<string | null>(null);

    const handleAccordionClick = async (occupation: IOccupation) => {
        setActiveSsyk(occupation.occupation_group.ssyk);
        onCompetencyClick(occupation.id);
        
        // Fetch educations asynchronously
        await handleClickToGetEducations(occupation.concept_taxonomy_id);
    
        // Triggar när datan har laddats
        toggleAccordion(occupation.id);
    };
    
    

     const toggleAccordion = (occupationId: string) => {
        const isCurrentlyExpanded = expandedAccordionId === occupationId;
    
        if (isCurrentlyExpanded) {
            // Stäng om öppet
            setExpandedAccordionId(null);
        } else {
            
            setExpandedAccordionId(null);
    
            
            setTimeout(() => {
                setExpandedAccordionId(occupationId);
    
                setTimeout(() => {
                    setExpandedAccordionId(null);
    
                    setTimeout(() => {
                        setExpandedAccordionId(occupationId);
                    }, 50);
    
                }, 50);
    
            }, 500);
        }
    };

    return (
        <div>
            {occupations.map((occupation) => (
               <DigiExpandableAccordion
               key={occupation.id}
               afHeading={occupation.occupation_label}
               af-expanded={expandedAccordionId === occupation.id}
               onAfOnClick={() => handleAccordionClick(occupation)}
           >
           
                    <ul>
                        {activeSsyk === occupation.occupation_group.ssyk && (
                            <li>
                                <WorkDescription ssyk={occupation.occupation_group.ssyk} />
                            </li>
                        )}

                        {selectedOccupationId === occupation.id && competencies.length > 0 && (
                            <div><Competencies props={competencies} /></div>
                        )}
                    
                        {activeEducationId === occupation.concept_taxonomy_id && (
                            <li><Educations props={educations} /></li>
                        )}
                    </ul>
                </DigiExpandableAccordion>
            ))}
        </div>
    );
};
