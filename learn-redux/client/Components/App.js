import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator.js'
import Main from './Main.js';

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// Connects all state to current level component (Main in this case)
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;