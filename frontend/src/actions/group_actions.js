import * as APIUtil from '../util/group_api_util';
export const RECEIVE_GROUP = 'RECEIVE_GROUP';
export const RECEIVE_GROUPS = 'RECEIVE_GROUPS';
export const REMOVE_GROUP = 'REMOVE_GROUP';

const receiveGroup = payload => ({
    type: RECEIVE_GROUP,
    group: payload.data
});

const receiveGroups = payload => ({
    type: RECEIVE_GROUPS,
    groups: payload.data
});

const removeGroup = (payload) => ({
    type: REMOVE_GROUP,
    group: payload.data
});

export const createGroup = group => dispatch => (
    APIUtil.createGroup(group)
        .then(group => dispatch(receiveGroup(group)))
);

export const deleteGroup = (groupId) => dispatch => (
    APIUtil.deleteGroup(groupId)
        .then((group) => dispatch(removeGroup(group)))
);

export const updateGroup = (group) => dispatch => (
    APIUtil.updateGroup(group)
        .then((group) => dispatch(receiveGroup(group)))
);

export const fetchGroup = (groupId) => dispatch => (
    APIUtil.fetchGroup(groupId)
        .then(group => dispatch(receiveGroup(group)))
);

export const fetchGroups = () => dispatch => (
    APIUtil.fetchGroups()
        .then(group => dispatch(receiveGroups(group)))
);