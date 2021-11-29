import * as React from "react";
import {Col} from 'react-bootstrap';

import OptionsList from "./OptionsList";

import options from '../data/options.json';

interface Props {
    title: string
}

interface State {
    BeforeEmail: boolean[],
    DoThisFirst: boolean[], 
    DeployEmailReactApps: boolean[], 
    ConfirmQueuesAreEmpty: boolean[], 
    DoThisLast: boolean[], 
    EncompassReactApps: boolean[], 
    OtherAPIs: boolean[]
}

class DeployColumn extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            BeforeEmail: [false, false, false, false],
            DoThisFirst: [false], 
            DeployEmailReactApps: [false, false, false, false, false, false], 
            ConfirmQueuesAreEmpty: [false, false, false, false], 
            DoThisLast: [false], 
            EncompassReactApps: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
            OtherAPIs: [false, false]
        }
        this.handleInputChangeForBeforeEmail = this.handleInputChangeForBeforeEmail.bind(this);
        this.handleInputChangeForDoThisFirst = this.handleInputChangeForDoThisFirst.bind(this);
        this.handleInputChangeForDeployEmailReactApps = this.handleInputChangeForDeployEmailReactApps.bind(this);
        this.handleInputChangeForConfirmQueuesAreEmpty = this.handleInputChangeForConfirmQueuesAreEmpty.bind(this);
        this.handleInputChangeForDoThisLast = this.handleInputChangeForDoThisLast.bind(this);
        this.handleInputChangeForEncompassReactApps = this.handleInputChangeForEncompassReactApps.bind(this);
        this.handleInputChangeForOtherAPIs = this.handleInputChangeForOtherAPIs.bind(this);
    }

    handleInputChangeForBeforeEmail(event: any) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const list = prevState.BeforeEmail;
            list[j-1] = Boolean(event.target.checked);
            return {
                BeforeEmail: list
            };
        })
    }

    handleInputChangeForDoThisFirst(event: any) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const list = prevState.DoThisFirst;
            list[j-1] = Boolean(event.target.checked);
            return {
                DoThisFirst: list
            };
        })
    }

    handleInputChangeForDeployEmailReactApps(event: any) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const list = prevState.DeployEmailReactApps;
            list[j-1] = Boolean(event.target.checked);
            return {
                DeployEmailReactApps: list
            };
        })
    }

    handleInputChangeForConfirmQueuesAreEmpty(event: any) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const list = prevState.ConfirmQueuesAreEmpty;
            list[j-1] = Boolean(event.target.checked);
            return {
                ConfirmQueuesAreEmpty: list
            };
        })
    }

    handleInputChangeForDoThisLast(event: any) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const list = prevState.DoThisLast;
            list[j-1] = Boolean(event.target.checked);
            return {
                DoThisLast: list
            };
        })
    }

    handleInputChangeForEncompassReactApps(event: any) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const list = prevState.EncompassReactApps;
            list[j-1] = Boolean(event.target.checked);
            return {
                EncompassReactApps: list
            };
        })
    }

    handleInputChangeForOtherAPIs(event: any) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const list = prevState.OtherAPIs;
            list[j-1] = Boolean(event.target.checked);
            return {
                OtherAPIs: list
            };
        })
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
            <Col className="px-0">
                <div className="border border-dark border-2 p-2">
                    <div className="text-center">
                        <b>{this.props.title}</b>
                    </div>
                </div>
                <div className="border border-dark border-2 p-2">
                    <OptionsList options={BeforeEmail} flag={this.state.BeforeEmail} onInputChange={this.handleInputChangeForBeforeEmail} />
                </div>

                <div className="border border-dark border-2 p-2">
                    <b>EMAIL</b>
                </div>

                <div className="border border-dark border-2 p-2">
                    <OptionsList options={DoThisFirst} flag={this.state.DoThisFirst} onInputChange={this.handleInputChangeForDoThisFirst} />
                    <div>
                        Deploy Email React Apps
                    </div>
                    <OptionsList options={DeployEmailReactApps} flag={this.state.DeployEmailReactApps} onInputChange={this.handleInputChangeForDeployEmailReactApps} />
                    <div>
                        Confirm queues are empty before doing the remaining
                    </div>
                    <OptionsList options={ConfirmQueuesAreEmpty} flag={this.state.ConfirmQueuesAreEmpty} onInputChange={this.handleInputChangeForConfirmQueuesAreEmpty} />
                    <div>
                        <b>DO THIS LAST</b> as it restarts the scheduler & initiator
                    </div>
                    <OptionsList options={DoThisLast} flag={this.state.DoThisLast} onInputChange={this.handleInputChangeForDoThisLast} />
                </div>

                <div className="border border-dark border-2 p-2">
                    <div>
                        <b>OTHER Deploys</b>
                        <br />
                        Encompass React Apps
                    </div>
                    <OptionsList options={EncompassReactApps} flag={this.state.EncompassReactApps} onInputChange={this.handleInputChangeForEncompassReactApps} /> 
                    <div>Other APIs</div>
                    <OptionsList options={OtherAPIs} flag={this.state.OtherAPIs} onInputChange={this.handleInputChangeForOtherAPIs} />
                </div>

                <div className="border border-dark border-2 p-2">
                    <div><b>MISC</b></div>
                    <OptionsList options={[]} flag={[]} onInputChange={() => false} />
                </div>
            </Col>
        )
    }
}

export default DeployColumn