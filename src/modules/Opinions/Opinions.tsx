import React from "react";
import * as P from './parts';
import {ButtonBack, ButtonNext, Dot, DotGroup, Slide, Slider} from 'pure-react-carousel'
import OpinionItem, {OpinionItemProps} from "./OpinionItem";
import 'pure-react-carousel/dist/react-carousel.es.css';

const opinions: OpinionItemProps[] = [
    {
        description: 'Polecam z całego serca korepetycje z panią Justyną. Tlumaczy matematykę w sposób niezwykle prosty i przystępny. Korepetycje prowadzone są ciekawie również dlatego, że Pani Justyna proponuje gry i zabawy, dzięki czemu łatwiej jest zrozumieć i zapamiętać wiele rzeczy. Tłumaczy zadania na różne sposoby tak, aby do każdego trafił ten najlepszy. Dzięki korepetycjom z Panią Justyną przez rok znakomicie przygotowałam się do egzaminu gimnazjalnego i zdałam go z wynikiem bardzo dobrym. Do tego nawet polubiłam rozwiązywać zadania matematyczne, gdzie przyznam, że wcześniej tego nie cierpiałam.',
        signature: 'Klaudia',
    },
    {
        description: 'Pani Justyna to osoba bardzo kompetentna i rzetelna. Z wielkim zaangażowaniem podchodzi do przygotowania swoich uczniów. Jest bardzo cierpliwa i wyrozumiała, doskonale tłumaczy nawet najbardziej zawiłe zagadnienia. Często urozmaica zajęcia grami tematycznymi, które pomagają w nauce. Polecam zajęcia z Panią Justyną.',
        signature: 'Mama Mai i Mikołaja',
    },
    {
        description: 'Poszerzanie wiedzy poprzez pomysłowość, nauczanie przez ciekawość, te słowa charakteryzują Panią Justynę która jest zaangażowana w wykonywanie swojej pasji w pracy ☺',
        signature: 'Mama Filipa',
    },
    {
        description: 'Pani Justyna pomaga mi w nauce już prawie cztery lata i jest w tym co robi naprawdę dobra. Atmosfera prowadzonych przez nią zajęć jest swobodna, a jednocześnie motywująca. Jest zorganizowana, cierpliwa i dzięki niej matematyka jest przyjemniejsza. Gorąco polecam ☺',
        signature: 'Karolina',
    },
    {
        description: 'Pani Justyna prowadzi lekcje profesjonalnie, na bardzo wysokim poziomie. W przystępny sposób tłumaczy wszelkie zagadnienia matematyczne. Bardzo dobrze przygotowuje do testów i egzaminów. Zajecia prowadzone są w sposób ciekawy, atrakcyjny i angażujący. Pani Justyna jest bardzo pozytywną osobą a prowadzone przez nią zajęcia zawsze  odbywają się w miłej i przyjaznej atmosferze. Serdecznie polecam zajęcia z Panią Justyną!',
        signature: 'Wiktoria',
    }
];

interface OpinionsProps {
    className?: string;
}
const Opinions: React.FC<OpinionsProps> = ({className}) => {

    return (
        <P.StyledWrapper>
            <P.Header>Opinie</P.Header>
            <P.StyledCarouselProvider
                naturalSlideWidth={1}
                naturalSlideHeight={1}
                orientation={'horizontal'}
                totalSlides={opinions.length}>
                <P.StyledRowWrapper>
                    {/*<P.StyledButtonBack>Back</P.StyledButtonBack>*/}
                    <P.StyledSlider>
                        {
                            opinions.map((item, key) => (
                                <Slide key={key} index={key}>
                                    <OpinionItem  {...item} />
                                </Slide>
                            ))
                        }
                    </P.StyledSlider>
                    {/*<P.StyledButtonNext>Next</P.StyledButtonNext>*/}
                </P.StyledRowWrapper>
                <P.DotWrapper>
                    {opinions.map((item, key) => ( <P.StyledDot slide={key} key={key} ><div></div></P.StyledDot>))}
                </P.DotWrapper>
            </P.StyledCarouselProvider>
        </ P.StyledWrapper>
    );
};

export default Opinions;
