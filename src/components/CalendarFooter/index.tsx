import React, { Fragment } from 'react'

type CalendarFooterProps = {
    children: React.ReactNode
}

export const CalendarFooter: React.FC<CalendarFooterProps> = ({children}) => {
  return (
    <Fragment>
        {children}
    </Fragment>
  )
}