import React from 'react'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';
import "./styles.css"

export const Widgets = () => {
    const Articulos = (title, subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widgets__left">
                    <FiberManualRecordRoundedIcon />
                </div>
                <div className="widgets__right">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>Lo más viral en el día</h2>
            <InfoRoundedIcon />
        </div>

        {Articulos("EXAMPLE TEXT","This is a example text for an article")}
        {Articulos("EXAMPLE TEXT","This is a example text for an article")}
        {Articulos("EXAMPLE TEXT","This is a example text for an article")}
    </div>
  )
}
