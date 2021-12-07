import * as React from "react";

import DeployColumn from "./DeployColumn";
import { Row } from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class GridContainer extends React.Component<{}> {
    render() {
        return (
            <>
                <Row>
                    <DeployColumn title="Staging" />
                    <DeployColumn title="AU" />
                    <DeployColumn title="CA" />
                    <DeployColumn title="US" />
                </Row> 
                <br>
                </br> 
                <button className="btn btn-primary">
                Save
                </button>
            </>
            
        )
    }
}

export default GridContainer