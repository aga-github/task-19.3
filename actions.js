import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

// Add comment

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
};

const boundAddComment = text => dispatch(addComment(text));

// Remove comment

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id 
  }
};

const boundRemoveComment = id => dispatch(removeComment(id));

// Edit comment

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
};

const boundEditComment = (text, id) => dispatch(editComment(text, id));

// THUMB_UP_COMMENT

function thumbUpComment(like, id) {
  return {
    type: THUMB_UP_COMMENT,
    id,
    like: + 1
  }
};

const boundThumbUpComment = (like, id) => dispatch(thumbUpComment(like, id));

// THUMB_DOWN_COMMENT
  
function thumbDownComment (like, id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id,
    like: - 1
  }
};

const boundThumbDownComment = (like, id) => dispatch(thumbDownComment(like, id));