
import { ReactElement } from 'react';
import './styles.scss'


export default function CustomModal({
    header = <div>header</div>,
    body,
    footer = <div>footer</div>,
    id,
    onClosed }: { id?: string, header?: ReactElement, body?: ReactElement, footer?: ReactElement, onClosed?: () => void }) {



    return (
        <>
            <div className='curtain' />

            <div className='modal' id={id || 'Modal'}>
                <div className='header'>
                    <span className='close-icon' onClick={() => onClosed && onClosed()} title='close modal'>&times;</span>
                    {header}
                </div>
                <div className='body'>
                    {body}
                </div>
                <div className='footer'>
                    {footer}
                </div>
            </div>
        </>
    )
}