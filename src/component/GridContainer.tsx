import * as React from "react";

import DeployColumn from "./DeployColumn";
import { Row, Container } from 'react-bootstrap';

interface Column {
    BeforeEmail: boolean[],
    DoThisFirst: boolean[],
    DeployEmailReactApps: boolean[],
    ConfirmQueuesAreEmpty: boolean[],
    DoThisLast: boolean[],
    EncompassReactApps: boolean[],
    OtherAPIs: boolean[]
}

interface State {
    isToggleOn: boolean,
    Staging: Column,
    AU: Column,
    CA: Column,
    US: Column
}

class GridContainer extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            isToggleOn: false,
            Staging: {
                BeforeEmail: [false, false, false, false],
                DoThisFirst: [false],
                DeployEmailReactApps: [false, false, false, false, false, false],
                ConfirmQueuesAreEmpty: [false, false, false, false],
                DoThisLast: [false],
                EncompassReactApps: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                OtherAPIs: [false, false]
            },
            AU: {
                BeforeEmail: [false, false, false, false],
                DoThisFirst: [false],
                DeployEmailReactApps: [false, false, false, false, false, false],
                ConfirmQueuesAreEmpty: [false, false, false, false],
                DoThisLast: [false],
                EncompassReactApps: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                OtherAPIs: [false, false]
            },
            CA: {
                BeforeEmail: [false, false, false, false],
                DoThisFirst: [false],
                DeployEmailReactApps: [false, false, false, false, false, false],
                ConfirmQueuesAreEmpty: [false, false, false, false],
                DoThisLast: [false],
                EncompassReactApps: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                OtherAPIs: [false, false]
            },
            US: {
                BeforeEmail: [false, false, false, false],
                DoThisFirst: [false],
                DeployEmailReactApps: [false, false, false, false, false, false],
                ConfirmQueuesAreEmpty: [false, false, false, false],
                DoThisLast: [false],
                EncompassReactApps: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
                OtherAPIs: [false, false]
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChnageForStaging1 = this.handleChnageForStaging1.bind(this);
        this.handleChnageForStaging2 = this.handleChnageForStaging2.bind(this);
        this.handleChnageForAU1 = this.handleChnageForAU1.bind(this);
        this.handleChnageForAU2 = this.handleChnageForAU2.bind(this);
        this.handleChnageForCA1 = this.handleChnageForCA1.bind(this);
        this.handleChnageForCA2 = this.handleChnageForCA2.bind(this);
        this.handleChnageForUS1 = this.handleChnageForUS1.bind(this);
        this.handleChnageForUS2 = this.handleChnageForUS2.bind(this);
    }
    handleChange(event: any) {
        this.setState({
            isToggleOn: event.target.checked
        })
    }
    handleChnageForStaging1(event: any, partName: string) {
        this.setState(prevState => {
            const staging = prevState.Staging;
            const index = Number(event.target.dataset.index);
            staging[partName as keyof typeof staging][index - 1] = Boolean(event.target.checked);
            console.log("staging1");
            return {
                Staging: staging,
                AU: staging,
                CA: staging,
                US: staging
            }
        })
    }
    handleChnageForStaging2(event: any, partName: string) {
        this.setState(prevState => {
            const staging = prevState.Staging;
            const index = Number(event.target.dataset.index);
            staging[partName as keyof typeof staging][index - 1] = Boolean(event.target.checked);
            console.log("staging2");
            return {
                Staging: staging
            }
        })
    }
    handleChnageForAU1(event: any, partName: string) {
        this.setState(prevState => {
            const au = prevState.AU;
            const index = Number(event.target.dataset.index);
            au[partName as keyof typeof au][index - 1] = Boolean(event.target.checked);
            console.log("au1");
            return {
                Staging: au,
                AU: au,
                CA: au,
                US: au
            }
        })
    }
    handleChnageForAU2(event: any, partName: string) {
        this.setState(prevState => {
            const au = prevState.AU;
            const index = Number(event.target.dataset.index);
            au[partName as keyof typeof au][index - 1] = Boolean(event.target.checked);
            console.log("au2");
            return {
                AU: au
            }
        })
    }
    handleChnageForCA1(event: any, partName: string) {
        this.setState(prevState => {
            const ca = prevState.CA;
            const index = Number(event.target.dataset.index);
            ca[partName as keyof typeof ca][index - 1] = Boolean(event.target.checked);
            console.log("ca1");
            return {
                Staging: ca,
                AU: ca,
                CA: ca,
                US: ca
            }
        })
    }
    handleChnageForCA2(event: any, partName: string) {
        this.setState(prevState => {
            const ca = prevState.CA;
            const index = Number(event.target.dataset.index);
            ca[partName as keyof typeof ca][index - 1] = Boolean(event.target.checked);
            console.log("ca2");
            return {
                CA: ca
            }
        })
    }
    handleChnageForUS1(event: any, partName: string) {
        this.setState(prevState => {
            const staging = prevState.Staging;
            const au = prevState.AU;
            const ca = prevState.CA;
            const us = prevState.US;
            const index = Number(event.target.dataset.index);
            staging[partName as keyof typeof us][index - 1] = Boolean(event.target.checked);
            au[partName as keyof typeof us][index - 1] = Boolean(event.target.checked);
            ca[partName as keyof typeof us][index - 1] = Boolean(event.target.checked);
            us[partName as keyof typeof us][index - 1] = Boolean(event.target.checked);
            console.log("us1");
            return {
                Staging: staging,
                AU: au,
                CA: ca,
                US: us
            }
        })
    }
    handleChnageForUS2(event: any, partName: string) {
        this.setState(prevState => {
            const us = prevState.US;
            const index = Number(event.target.dataset.index);
            us[partName as keyof typeof us][index - 1] = Boolean(event.target.checked);
            console.log("us2");
            return {
                US: us
            }
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h4 className="text-primary">Deploy</h4>
                    <div className="form-check">
                        <input className="form-check-input"
                            type="checkbox"
                            onChange={this.handleChange}
                            checked={this.state.isToggleOn} />

                        <label className="form-check-label">Deploy all at the same time</label>
                    </div>
                </div>
                <Container>
                    <Row>
                        <DeployColumn title="Staging" data={this.state.Staging} onInputChange={this.state.isToggleOn ? this.handleChnageForStaging1 : this.handleChnageForStaging2} />
                        <DeployColumn title="AU" data={this.state.AU} onInputChange={this.state.isToggleOn ? this.handleChnageForAU1 : this.handleChnageForAU2} />
                        <DeployColumn title="CA" data={this.state.CA} onInputChange={this.state.isToggleOn ? this.handleChnageForCA1 : this.handleChnageForCA2} />
                        <DeployColumn title="US" data={this.state.US} onInputChange={this.state.isToggleOn ? this.handleChnageForUS1 : this.handleChnageForUS2} />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default GridContainer