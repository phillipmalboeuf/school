import React, { useContext } from 'react'
import { FunctionComponent } from 'react'

export const Input: FunctionComponent<{
  type: 'number' | 'range' | 'datetime-local'
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  onChange: (value: number) => void
}> = props => {
  return <input type={props.type}
    value={props.value}
    defaultValue={props.defaultValue}
    min={props.min}
    max={props.max}
    step={props.step}
    onChange={e => {
      props.onChange(e.currentTarget.valueAsNumber)
    }} />
}