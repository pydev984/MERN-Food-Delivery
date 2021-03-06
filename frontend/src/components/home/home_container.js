import { connect } from 'react-redux';
import Home from './home';
import { fetchUsers, fetchUser } from "../../actions/user_actions"
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions"
import { fetchBusinesses } from "../../actions/business_actions"
import { updateFilter } from "../../actions/filter_action";
import { clearUpData } from "../../actions/clear_actions";
import { updateZoom } from "../../actions/zoom_actions";
import { fetchBusinessesByCoordinates } from '../../actions/business_actions';
import { createGroup, fetchGroup, clearGroups } from "../../actions/group_actions";
import { closeInfo} from '../../actions/info_actions';

const mapSTP = (state) => ({
    user: state.session.user,
    users: state.entities.users,
    foodRestrictions: state.entities.foodRestrictions,
    selectedFoodRestrictions: state.ui.selectedFoodRestrictions,
    businesses: state.entities.businesses,
    zoom: state.ui.zoom,
    coordinates: state.ui.filters,
    errors: state.errors.group,
    groups: state.entities.groups,
    info: state.ui.info
})

const mapDTP = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (userId)=>dispatch(fetchUser(userId)),
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    fetchBusinesses: () => dispatch(fetchBusinesses()),
    createGroup: group => dispatch(createGroup(group)),
    fetchGroup: id => dispatch(fetchGroup(id)),
    updateFilter: (filters, value) => dispatch(updateFilter(filters, value)),
    updateZoom: (value) => dispatch(updateZoom(value)),
    fetchBusinessesByCoordinates: (value) => dispatch(fetchBusinessesByCoordinates(value)),
    clearGroups: () => dispatch(clearGroups()),
    clearUpData: () => dispatch(clearUpData()),
    closeInfo: ()=>dispatch(closeInfo())
})

export default connect(mapSTP, mapDTP)(Home);