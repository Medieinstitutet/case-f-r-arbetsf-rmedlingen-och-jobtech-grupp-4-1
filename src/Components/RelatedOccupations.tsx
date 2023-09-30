import { IOccupation } from "../models/RelatedOccupationsInterface";

interface relatedOccupationsProps {
  props: IOccupation[];
}

export const RelatedOccupations = (props: relatedOccupationsProps) => {
  const relatedOccupations = props.props;

  return (
    <>
      <div>
        <h1>Relaterade yrken</h1>
        {/* Testutskrift av resultat - Lista med relaterade yrken */}
        {relatedOccupations.map((oneOccupation) => (
          <li key={oneOccupation.id}>{oneOccupation.occupation_label}</li>
        ))}
      </div>
    </>
  );
};
