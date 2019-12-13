import { connect } from 'react-redux';
import VoteLine from './vote_line';
import { createVote, updateVote, destroyVote } from '../../actions/vote_actions'
import { fetchBusiness } from '../../actions/business_actions'
import { fetchUser } from '../../actions/user_actions';


const mapDispatchToProps = dispatch => ({
  createVote: vote => dispatch(createVote(vote)),
  updateVote: (vote, id) => dispatch(updateVote(vote, id)),
  destroyVote: id => dispatch(destroyVote(id)),
  fetchBusiness: id => dispatch(fetchBusiness(id)),
  fetchUser: id => dispatch(fetchUser(id))
})


export default connect(
  null,
  mapDispatchToProps
)(VoteLine);