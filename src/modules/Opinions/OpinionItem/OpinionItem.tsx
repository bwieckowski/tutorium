import React, {Attributes} from "react";
import * as P from './parts';

export type OpinionItemProps  = Attributes & {
    description: string;
    signature: string;
};

const OpinionItem: React.FC<OpinionItemProps> = ({description, signature}) => (
    <P.StyledWrapper>
        <P.Content>
            <P.Description>{description}</P.Description>
            <P.Signature>{signature}</P.Signature>
        </P.Content>
    </P.StyledWrapper>
);
export default OpinionItem;
