import { connect } from 'react-redux';
import compareButton from '../components/CompareButton';
import { selectCompare, removeCompare } from '../actions';

const mapStateToProps = state => (
  {
    comparedSchools: state.ComparedSchools,
  }
);

const mapDispatchToProps = dispatch => (
  {
    selectCompare: (comparedSchool) => {
      dispatch(selectCompare(comparedSchool));
    },
    removeCompare: (schoolId) => {
      dispatch(removeCompare(schoolId));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(compareButton);
