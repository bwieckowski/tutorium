import React from "react";
import * as P from './parts';
import Tile from "./Tile";
import pomoc from 'images/pomoc_w_uzupelnianiu_brakow.jpeg'
const Lessons: React.FC = () =>(
    <P.StyledWrapper>
        <P.Description>
            <P.Heading>Zajęcia</P.Heading>
            <P.Section>
                Zajęcia indywidualne z matematyk to moja specjalność. Zawsze z dużym
                zaangażowaniem, w pełnym skupieniu i z anielską cierpliwością pracuję,
                aby sprawić by moi uczniowie odnieśli sukces. Na moich lekcjach stosuję
                indywidualne podejście i kładę szczególny nacisk na budowanie pewności siebie uczniów.
            </P.Section>
        </P.Description>
        <P.TilesWrapper>
            <P.StyledTile src={pomoc} decription={"Pomoc w uzupełnianiu braków edukacyjnych"} />
            <P.StyledTile src={pomoc} decription={"Pomoc w uzupełnianiu braków edukacyjnych"} />
            <P.StyledTile src={pomoc} decription={"Pomoc w uzupełnianiu braków edukacyjnych"} />
            <P.StyledTile src={pomoc} decription={"Pomoc w uzupełnianiu braków edukacyjnych"} />
        </P.TilesWrapper>
    </P.StyledWrapper>
);

export default Lessons;
