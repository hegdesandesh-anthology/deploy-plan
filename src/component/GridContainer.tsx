import * as React from "react";

import DeployColumn from "./DeployColumn";
import { Row } from 'react-bootstrap';

class GridContainer extends React.Component<{}> {
    render() {
        return (
            <Row>
                <DeployColumn title="Staging" />
                <DeployColumn title="AU" />
                <DeployColumn title="CA" />
                <DeployColumn title="US" />
            </Row>
        )
    }
}

export default GridContainer