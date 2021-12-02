import * as React from "react";

interface Option {
    id?: number,
    value?: string,
    isChecked?: boolean
}

interface Props {
    flag: boolean[],
    options: Option[],
    onInputChange: any
}

class OptionsList extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event: any) {
        this.props.onInputChange(event);
    }

    render() {
        return (
            <div className="pl-3">
                {
                    this.props.options.map((option, index) => {
                        return (
                            <div key={option.id} className={this.props.flag[index] ? 'bg-warning' : ''}>
                                <div className="form-check">
                                    <input className="form-check-input"
                                        type="checkbox"
                                        data-index={index + 1}
                                        onChange={this.onChange}
                                        checked={this.props.flag[index]} />

                                    <label className="form-check-label">{option.value}</label>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default OptionsList