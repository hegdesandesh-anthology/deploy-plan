import * as React from "react";
import {Col} from 'react-bootstrap';

import OptionsList from "./OptionsList";

import options from '../data/options.json';

interface OptionsModel {
    BeforeEmail: boolean[],
    DoThisFirst: boolean[], 
    DeployEmailReactApps: boolean[], 
    ConfirmQueuesAreEmpty: boolean[], 
    DoThisLast: boolean[], 
    EncompassReactApps: boolean[], 
    OtherAPIs: boolean[]
}

interface Props {
    title: string,
    data: OptionsModel,
    onInputChange: any
}


class DeployColumn extends React.Component<Props> {
    constructor(props: any) {
        super(props);
        this.handleInputChangeForBeforeEmail = this.handleInputChangeForBeforeEmail.bind(this);
        this.handleInputChangeForDoThisFirst = this.handleInputChangeForDoThisFirst.bind(this);
        this.handleInputChangeForDeployEmailReactApps = this.handleInputChangeForDeployEmailReactApps.bind(this);
        this.handleInputChangeForConfirmQueuesAreEmpty = this.handleInputChangeForConfirmQueuesAreEmpty.bind(this);
        this.handleInputChangeForDoThisLast = this.handleInputChangeForDoThisLast.bind(this);
        this.handleInputChangeForEncompassReactApps = this.handleInputChangeForEncompassReactApps.bind(this);
        this.handleInputChangeForOtherAPIs = this.handleInputChangeForOtherAPIs.bind(this);
    }

    handleInputChangeForBeforeEmail(event: any) {
        this.props.onInputChange(event, "BeforeEmail")
    }

    handleInputChangeForDoThisFirst(event: any) {
        this.props.onInputChange(event, "DoThisFirst")
    }

    handleInputChangeForDeployEmailReactApps(event: any) {
        this.props.onInputChange(event, "DeployEmailReactApps")
    }

    handleInputChangeForConfirmQueuesAreEmpty(event: any) {
        this.props.onInputChange(event, "ConfirmQueuesAreEmpty")
    }

    handleInputChangeForDoThisLast(event: any) {
        this.props.onInputChange(event, "DoThisLast")
    }

    handleInputChangeForEncompassReactApps(event: any) {
        this.props.onInputChange(event, "EncompassReactApps")
    }

    handleInputChangeForOtherAPIs(event: any) {
        this.props.onInputChange(event, "OtherAPIs")
    }
    
    render() {
        let BeforeEmail = options.data.BeforeEmail;
        let DoThisFirst = options.data.Email.DoThisFirst;
        let DeployEmailReactApps = options.data.Email.DeployEmailReactApps;
        let ConfirmQueuesAreEmpty = options.data.Email.ConfirmQueuesAreEmpty;
        let DoThisLast = options.data.Email.DoThisLast;
        let EncompassReactApps = options.data.OtherDeploys.EncompassReactApps;
        let OtherAPIs = options.data.OtherDeploys.OtherAPIs;

        return (
            <Col className="border border-dark px-0">
                <div className="border-bottom border-dark p-2">
                    <div className="text-center">
                        <b>{this.props.title}</b>
                    </div>
                </div>
                <div className="border-bottom border-dark p-2 format">
                    <OptionsList options={BeforeEmail} flag={this.props.data.BeforeEmail} onInputChange={this.handleInputChangeForBeforeEmail} />
                </div>

                <div className="border-bottom border-dark p-2">
                    <b>EMAIL</b>
                </div>

                <div className="border-bottom border-dark p-2">
                    <OptionsList options={DoThisFirst} flag={this.props.data.DoThisFirst} onInputChange={this.handleInputChangeForDoThisFirst} />
                    <div>
                        Deploy Email React Apps
                    </div>
                    <OptionsList options={DeployEmailReactApps} flag={this.props.data.DeployEmailReactApps} onInputChange={this.handleInputChangeForDeployEmailReactApps} />
                    <div>
                        Confirm queues are empty before doing the remaining
                    </div>
                    <OptionsList options={ConfirmQueuesAreEmpty} flag={this.props.data.ConfirmQueuesAreEmpty} onInputChange={this.handleInputChangeForConfirmQueuesAreEmpty} />
                    <div>
                        <b>DO THIS LAST</b> as it restarts the scheduler & initiator
                    </div>
                    <OptionsList options={DoThisLast} flag={this.props.data.DoThisLast} onInputChange={this.handleInputChangeForDoThisLast} />
                </div>

                <div className="border-bottom border-dark p-2">
                    <div>
                        <b>OTHER Deploys</b>
                        <br />
                        Encompass React Apps
                    </div>
                    <OptionsList options={EncompassReactApps} flag={this.props.data.EncompassReactApps} onInputChange={this.handleInputChangeForEncompassReactApps} /> 
                    <div>Other APIs</div>
                    <OptionsList options={OtherAPIs} flag={this.props.data.OtherAPIs} onInputChange={this.handleInputChangeForOtherAPIs} />
                </div>

                <div className="border-bottom border-dark p-2">
                    <div><b>MISC</b></div>
                    {/* <OptionsList options={[]} flag={[]} onInputChange={() => false} /> */}
                </div>
            </Col>
        )
    }
}

export default DeployColumn