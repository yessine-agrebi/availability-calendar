import React, { Fragment } from 'react'

type CalendarBodyProps = {
    children: React.ReactNode
}

export const CalendarBody: React.FC<CalendarBodyProps> = ({children}) => {
  return (
    <Fragment>
        {children}
    </Fragment>
  )
}