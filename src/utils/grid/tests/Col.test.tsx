import * as React from "react";
import * as renderer from "react-test-renderer"
import ColWrapper from "../Col"
import {BrakepointsName, breakposints} from "../media";
import 'jest-styled-components'

const brakepointsValue = Object.keys(breakposints).map( (key: BrakepointsName) =>(`(max-width: ${breakposints[key]}px)`));

it("renders the heading", () => {
    const result = renderer.create(<ColWrapper sizes={[1, 2, 1, 3,1]} />).toJSON();
    expect(result).toMatchSnapshot();
    expect(result).toHaveStyleRule('width', '100%', {
        media: brakepointsValue[0]
    });
});
