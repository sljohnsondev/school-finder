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
    selectCompare: (school) => {
      dispatch(selectCompare(school));
    },
    removeCompare: (id) => {
      dispatch(removeCompare(id));
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(compareButton);
