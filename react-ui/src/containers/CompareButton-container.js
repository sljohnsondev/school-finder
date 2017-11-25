import { connect } from 'react-redux';
import compareButton from '../components/CompareButton';
import { selectCompare } from '../actions';

const mapStateToProps = state => (
  {
    comparedSchools: state.comparedSchools,
  }
);

const mapDispatchToProps = dispatch => (
  {
    selectCompare: (school) => {
      dispatch(selectCompare(school));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(compareButton);
