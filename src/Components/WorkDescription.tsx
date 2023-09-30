import { useEffect, useState } from 'react';
import { getDataFromScb } from '../services/ApiResponseService';
import { ApiResponse } from '../models/ssykResponse';

interface WorkDescriptionProps {
    ssyk: string;
}


export const WorkDescription = ({ ssyk }: WorkDescriptionProps) => {
    const [data, setData] = useState<ApiResponse | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getDataFromScb();
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                      {data.variables
                        .filter(variable => variable.code === "YrkesBeskrivning")
                        .map((variable, index) => {
                            const valueIndex = variable.values.indexOf(ssyk);
                            if (valueIndex !== -1) {
                                return (
                                    <div key={index} className='educationWrapper'>
                                        <h2>Yrkesbeskrivning</h2>
                                        <p>
                                            {variable.valueTexts[valueIndex]}
                                        </p>
                                    </div>
                                )
                            }
                            return null;
                        })}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}