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
        this.handleChnageForToggleOn = this.handleChnageForToggleOn.bind(this);
        this.handleChnageForStaging = this.handleChnageForStaging.bind(this);
        this.handleChnageForAU = this.handleChnageForAU.bind(this);
        this.handleChnageForCA = this.handleChnageForCA.bind(this);
        this.handleChnageForUS = this.handleChnageForUS.bind(this);
    }
    handleChange(event: any) {
        this.setState({
            isToggleOn: event.target.checked
        })
    }
    handleChnageForToggleOn(event: any, partName: string) {
        this.setState(prevState => {
            let index = Number(event.target.dataset.index);
            let res = Boolean(event.target.checked);
            return {
                Staging: {
                    ...prevState.Staging,
                    [partName as keyof typeof prevState.Staging]: prevState.Staging[partName as keyof typeof prevState.Staging].map((e, i) => i === index-1 ? res : e)
                },
                AU: {
                    ...prevState.AU,
                    [partName as keyof typeof prevState.AU]: prevState.AU[partName as keyof typeof prevState.AU].map((e, i) => i === index-1 ? res : e)
                },
                CA: {
                    ...prevState.CA,
                    [partName as keyof typeof prevState.CA]: prevState.CA[partName as keyof typeof prevState.CA].map((e, i) => i === index-1 ? res : e)
                },
                US: {
                    ...prevState.US,
                    [partName as keyof typeof prevState.US]: prevState.US[partName as keyof typeof prevState.US].map((e, i) => i === index-1 ? res : e)
                }
            }
        })
    }
    handleChnageForStaging(event: any, partName: string) {
        this.setState(prevState => {
            let index = Number(event.target.dataset.index);
            let res = Boolean(event.target.checked);
            return {
                ...prevState,
                Staging: {
                    ...prevState.Staging,
                    [partName as keyof typeof prevState.Staging]: prevState.Staging[partName as keyof typeof prevState.Staging].map((e, i) => i === index-1 ? res : e)
                }
            }
        })
    }
    
    handleChnageForAU(event: any, partName: string) {
        this.setState(prevState => {
            let index = Number(event.target.dataset.index);
            let res = Boolean(event.target.checked);
            return {
                ...prevState,
                AU: {
                    ...prevState.AU,
                    [partName as keyof typeof prevState.AU]: prevState.AU[partName as keyof typeof prevState.AU].map((e, i) => i === index-1 ? res : e)
                }
            }
        })
    }
    
    handleChnageForCA(event: any, partName: string) {
        this.setState(prevState => {
            let index = Number(event.target.dataset.index);
            let res = Boolean(event.target.checked);
            return {
                ...prevState,
                CA: {
                    ...prevState.CA,
                    [partName as keyof typeof prevState.CA]: prevState.CA[partName as keyof typeof prevState.CA].map((e, i) => i === index-1 ? res : e)
                }
            }
        })
    }
    
    handleChnageForUS(event: any, partName: string) {
        this.setState(prevState => {
            let index = Number(event.target.dataset.index);
            let res = Boolean(event.target.checked);
            return {
                ...prevState,
                US: {
                    ...prevState.US,
                    [partName as keyof typeof prevState.US]: prevState.US[partName as keyof typeof prevState.US].map((e, i) => i === index-1 ? res : e)
                }
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
                        <DeployColumn title="Staging" data={this.state.Staging} onInputChange={this.state.isToggleOn ? this.handleChnageForToggleOn : this.handleChnageForStaging} />
                        <DeployColumn title="AU" data={this.state.AU} onInputChange={this.state.isToggleOn ? this.handleChnageForToggleOn : this.handleChnageForAU} />
                        <DeployColumn title="CA" data={this.state.CA} onInputChange={this.state.isToggleOn ? this.handleChnageForToggleOn : this.handleChnageForCA} />
                        <DeployColumn title="US" data={this.state.US} onInputChange={this.state.isToggleOn ? this.handleChnageForToggleOn : this.handleChnageForUS} />
                    </Row>
                </Container>
            </div>
        )
    }
}

export default GridContainer