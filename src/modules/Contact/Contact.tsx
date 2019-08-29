import React, {Attributes} from "react";
import * as P from './parts'
import * as G from 'utils/grid'

const Contact: React.FC = () => (
    <P.StyledWrapper>
        <G.Row>
            <G.Col sizes={[1, 1, 1/2, 1/2 , 1/2]}>
                <P.Header>Kontakt</P.Header>
                <P.Describe>Nauczanie to sztuka, a skuteczny nauczyciel to prawdziwy skarb.
                    Skontaktuj się ze mną i zacznijmy wspólnie pracować nad Twoim sukcesem!</P.Describe>
                <P.List>
                    <P.Item>Justyna Płonka</P.Item>
                    <P.Item>biuro@tutorium.edu.pl</P.Item>
                    <P.Item>{'+48 788 901 902'}</P.Item>
                </P.List>
            </G.Col>
            <G.Col sizes={[1, 1, 1/2, 1/2 , 1/2]}>
                <P.FormWrapper>
                    <P.StyledLabel htmlFor="">Twój email</P.StyledLabel>
                    <P.StyledInput type={"text"}/>
                    <P.StyledLabel htmlFor="">Wiadomość</P.StyledLabel>
                    <P.StyledTextarea name="" id="" cols={30} rows={10}>
                    </P.StyledTextarea>
                    <P.StyledSubmit type={"submit"} value={"Wyślij"}/>
                </P.FormWrapper>
            </G.Col>
        </G.Row>
    </P.StyledWrapper>
);
export default Contact;
