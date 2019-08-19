import React from 'react'

const FormInput = props => (
  <div class="row">
    <label style={{marginLeft: '30px'}}>{props.description}</label>
    <input name={props.name} type={props.type} placeholder={props.placeholder} onChange={props.changing} />
  </div>
)

export default FormInput
