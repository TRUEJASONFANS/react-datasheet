const CellShape = {
  readOnly: PropTypes.bool,
  key: PropTypes.string,
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  forceComponent: PropTypes.bool,
  disableEvents: PropTypes.bool,
  colSpan: PropTypes.number,
  rowSpan: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overflow: PropTypes.oneOf(['wrap', 'nowrap', 'clip']),
  dataEditor: PropTypes.func,
  valueViewer: PropTypes.func
}

export default CellShape