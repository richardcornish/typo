import React from 'react'
import Clipboard from 'clipboard'
import {Button} from 'react-bootstrap';

new Clipboard('.clipboard')

export default class Symbol extends React.Component {
    render() {
        const style = {
            fontSize: '200%'
        }
        return (
            <Button
                bsStyle="default"
                bsSize="large"
                className='clipboard'
                data-clipboard-text={this.props.data.javascript}
                dangerouslySetInnerHTML={{__html: this.props.data.html}}
                style={style}
            />
        )
    }
}