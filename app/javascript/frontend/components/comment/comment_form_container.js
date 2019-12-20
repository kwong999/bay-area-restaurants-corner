import { connect } from 'react-redux';
import CommentForm from './comment_form';
import { createComment, updateComment, destroyComment } from '../../actions/comment_actions';

const mapDispatchToProps = (dispatch) => ({
  createComment: comment => dispatch(createComment(comment)),
  updateComment: (comment, id) => dispatch(updateComment(comment, id)),
  destroyComment: id => dispatch(destroyComment(id))
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);