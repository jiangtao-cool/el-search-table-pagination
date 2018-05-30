
export const formProps = {
  size: {
    type: String,
    default: 'small'
  },
  showResetBtn: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: true
  },
  fuzzy: {
    type: Boolean,
    default: false
  },
  labelWidth: Number,
  itemWidth: Number,
  submitHandler: Function,
  submitLoading: {
    type: Boolean,
    default: false
  },
  submitBtnText: {
    type: String,
    default: '查询'
  },
  resetBtnText: {
    type: String,
    default: '重置'
  },
  forms: {
    type: Array,
    required: true
    // label: String,
    // prop: {
    //   type: [String, Array],
    //   required: true
    // },
    // itemType: {
    //   type: String,
    //   default: 'input',
    //   validator: itemTypeValidator
    // },
    // size: {
    //   type: String,
    //   default: ''
    // },
    // placeholder: {
    //   type: String,
    //   default: ''
    // },
    // editable: {
    //   type: Boolean,
    //   default: true
    // },
    // disabled: {
    //   type: Boolean,
    //   default: false
    // },
    // readonly: {
    //   type: Boolean,
    //   default: false
    // },
    // fuzzy: {
    //   type: Boolean,
    //   default: false
    // },
    // options: Array,
    // selectFetch: Function,
    // selectResultField: String,
    // selectResultHandler: Function,
    // selectUrl: String,
    // selectMethod: String,
    // valueKey: String,
    // labelKey: String,
    // format: Function,
    // selectParams: {
    //   type: Object,
    //   default: () => {
    //     return {}
    //   }
    // },
    // rules: Array,
    // pickerOptions: Object
  }
}

