import React from 'react';
import CodeService from '../services/CodeService'

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: []
        }
    }
    
    componentDidMount() {
        CodeService.list().then((response) => {
           this.setState({result: response.data}) 
        });
    }
    
    render() {
        return (
            <div>
                {
                    this.state.result.map(
                        res =>
                            <div id={res.id}>
                                <div>{res.content}</div>
                                <div>{res.tag}</div>
                            </div>
                    )
                }
            </div>
        )
    }
}

export default ListComponent
