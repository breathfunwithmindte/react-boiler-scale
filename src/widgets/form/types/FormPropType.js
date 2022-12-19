export default class FormPropType {

  /** @type {String} */ name;
  /** @type {String} */ label;
  /** @type {FormIncludeType[]} */ includes;
  /** @type {FormFieldType[]} */ fields;

  /**
   * 
   */
  constructor ()
  {

  }

}


class FormIncludeType {
  /** @type {String} */ name;
  /** @type {String} */ options;

  constructor ()
  {

  }
}


class FormFieldType {
  /** @type {String} */ name;
  /** @type {String} */ label;
  /** @type {String} */ sub_widget;
  
  constructor ()
  {
  
  }
}