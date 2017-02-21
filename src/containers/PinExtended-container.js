import { connect } from 'react-redux';

import PinExtended from '../components/PinExtended'

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps)(PinExtended)
