import * as React from "react";
import {Col} from 'react-bootstrap';

import OptionsList from "./OptionsList";

import options1 from '../Data/options1.json';
import options2 from '../Data/options2.json';
import options3 from '../Data/options3.json';
import options4 from '../Data/options4.json';

interface Props{
    title: string
}

interface Option {
    id?: number,
    value?: string,
    isChecked?: boolean
}

interface State {
    options1: boolean[][],
    options2: boolean[][],
    options3: boolean[][],
    options4: boolean[][]
}

class DeployColumn extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            options1: [[false, false, false, false]],
            options2: [[false], [false, false, false, false, false, false], [false], [false, false], [false, false, false], [false]],
            options3: [[false, false, false, false, false, false, false, false, false, false, false, false], [false, false]],
            options4: [[false]]
        }
        this.handleInputChange1 = this.handleInputChange1.bind(this);
        this.handleInputChange2 = this.handleInputChange2.bind(this);
        this.handleInputChange3 = this.handleInputChange3.bind(this);
        this.handleInputChange4 = this.handleInputChange4.bind(this);
    }

    handleInputChange1(event: React.ChangeEvent<HTMLInputElement>, i: number) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const arr = prevState.options1;
            arr[i-1][j-1] = Boolean(event.target.value);
            console.log(arr);
            return {options1: arr}
        });
    }

    handleInputChange2(event: React.ChangeEvent<HTMLInputElement>, i: number) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const arr = prevState.options2;
            arr[i-1][j-1] = Boolean(event.target.value);
            console.log(arr);
            return {options2: arr}
        });
    }

    handleInputChange3(event: React.ChangeEvent<HTMLInputElement>, i: number) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const arr = prevState.options3;
            arr[i-1][j-1] = Boolean(event.target.value);
            console.log(arr);
            return {options3: arr}
        });
    }

    handleInputChange4(event: React.ChangeEvent<HTMLInputElement>, i: number) {
        this.setState(prevState => {
            const j = Number(event.target.dataset.index);
            const arr = prevState.options4;
            arr[i-1][j-1] = Boolean(event.target.value);
            console.log(arr);
            return {options4: arr}
        });
    }
    

    render() {
        let o1d1: Option[];
        [o1d1] = options1.data;

        let o2d1: Option[], o2d2: Option[], o2d3: Option[], o2d4: Option[], o2d5: Option[], o2d6: Option[];
        [o2d1, o2d2, o2d3, o2d4, o2d5, o2d6] = options2.data;

        let o3d1: Option[], o3d2: Option[];
        [o3d1, o3d2] = options3.data;

        let o4d1: Option[];
        [o4d1] = options4.data;

        return (
            <Col className="px-0">
                <div className="border border-dark border-2 p-2">
                    <div className="text-center">
                        <b>{this.props.title}</b>
                    </div>
                </div>
                <div className="border border-dark border-2 p-2">
                    <OptionsList options={o1d1} flag={this.state.options1[0]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange1(event, 1)} />
                </div>

                <div className="border border-dark border-2 p-2">
                    <b>EMAIL</b>
                </div>

                <div className="border border-dark border-2 p-2">
                    <OptionsList options={o2d1} flag={this.state.options2[0]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange2(event, 1)} />
                    <div>
                        Deploy Email React Apps
                    </div>
                    <OptionsList options={o2d2} flag={this.state.options2[1]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange2(event, 2)} />
                    <div>
                        Confirm queues are empty before doing the remaining
                    </div>
                    <OptionsList options={o2d3} flag={this.state.options2[2]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange2(event, 3)} />
                    <div className="pl-3">
                        <OptionsList options={o2d4} flag={this.state.options2[3]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange2(event, 4)} />
                    </div>
                    <OptionsList options={o2d5} flag={this.state.options2[4]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange2(event, 5)} />
                    <div>
                        <b>DO THIS LAST</b> as it restarts the scheduler & initiator
                    </div>
                    <OptionsList options={o2d6} flag={this.state.options2[5]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange2(event, 6)} />
                </div>

                <div className="border border-dark border-2 p-2">
                    <div>
                        <b>OTHER Deploys</b>
                        <br />
                        Encompass React Apps
                    </div>
                    <OptionsList options={o3d1} flag={this.state.options3[0]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange3(event, 1)} /> 
                    <div>Other APIs</div>
                    <OptionsList options={o3d2} flag={this.state.options3[1]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange3(event, 2)} />
                </div>

                <div className="border border-dark border-2 p-2">
                    <div><b>MISC</b></div>
                    <OptionsList options={o4d1} flag={this.state.options4[0]} onInputChange={(event: React.ChangeEvent<HTMLInputElement>) => this.handleInputChange4(event, 1)} />
                </div>
            </Col>
        )
    }
}

export default DeployColumn