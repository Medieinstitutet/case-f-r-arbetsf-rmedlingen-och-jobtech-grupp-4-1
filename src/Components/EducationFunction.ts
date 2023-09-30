import { useState } from "react";
import { IEducation } from "../models/EducationsInterface";
import { getEducationsFromApi } from "../services/ApiResponseService";

export const EducationFunction = () => {
    const [educations, setEducations] = useState<IEducation[]>([]);
    const [activeEducationId, setActiveEducationId] = useState<string | null>(null);

    const handleClickToGetEducations = async (id: string) => {
        try {
            const data = await getEducationsFromApi(id);
            if (data) {
                setEducations(data);
                setActiveEducationId(id);
            }
        } catch (error) {
            console.error("Error fetching educations:", error);
        }
    };

    return { educations, activeEducationId, handleClickToGetEducations, setActiveEducationId };
}
