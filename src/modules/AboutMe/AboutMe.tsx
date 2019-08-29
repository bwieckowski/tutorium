import React from "react";
import * as P from './parts';


interface AboutMeProps {
    clickHandler: () => void;
}

const AboutMe: React.FC<AboutMeProps> = ({clickHandler}) =>(
    <P.StyledWrapper>
        <P.Description>
            <P.Heading>O mnie</P.Heading>
            <P.Section>
                Matematyka, a szczególnie uczenie matematyki to moja pasja. Wielką radość sprawia mi praca z dziećmi i młodzieżą,
                obserwowanie ich sukcesów oraz wspieranie i motywowanie podczas popełniania błędów. Nauczycielką matematyki jestem
                od września 2018r., a korepetycji udzielam już odkąd skończyłam liceum.
            </P.Section>
            <P.Section>Łatwo dostrzegam potencjał w każdym uczniu. Mam doświadczenie
                w pracy z dziećmi i młodzieżą na każdym etapie edukacyjnym. </P.Section>
            <P.Section>To pasja, motywacja i zaangażowanie pomagają mi w codziennej pracy z dziećmi i młodzieżą!
            </P.Section>
            <P.StyledButton onClick={clickHandler} >Skontaktuj się ze mną</P.StyledButton>
        </P.Description>
        <P.PhotoWrapper/>
    </P.StyledWrapper>
);

export default AboutMe;
