import React from 'react'
import PropTypes from 'prop-types'
import FormPropType from './types/FormPropType'
import FormLayout from '../../layout/component/FormLayout'

/**
 * @typedef {Object} FormPropTypeWrapper
 * @property {FormPropType} form
 * @param {FormPropTypeWrapper} _ 
 * @returns 
 */
function Form({ form }) {


  return (
    <FormLayout>
      <h1>hello world</h1>
    </FormLayout>
  )
}

Form.propTypes = {
  form: PropTypes.instanceOf(FormPropType).isRequired,
}

export default Form
