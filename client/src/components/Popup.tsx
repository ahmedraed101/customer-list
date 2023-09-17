import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state'
import React from 'react'
import { Button, Menu } from '@mui/material'
import { ReactNode } from 'react'

type PopupProps = {
    children: ReactNode
    inButton: string | ReactNode
}

const Popup = ({ children, inButton }: PopupProps) => {
    return (
        <div>
            <PopupState variant='popover' popupId='demo-popup-menu'>
                {(popupState) => (
                    <React.Fragment>
                        <Button variant='text' {...bindTrigger(popupState)}>
                            {inButton}
                        </Button>
                        <Menu {...bindMenu(popupState)}>{children}</Menu>
                    </React.Fragment>
                )}
            </PopupState>
        </div>
    )
}

export default Popup
