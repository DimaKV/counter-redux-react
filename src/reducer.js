function reducer( state=0, action){

    if (state === undefined){
      return state;
    }
  
    switch(action.type){
      case 'INC': return state + 1;
      case 'DEC': return state - 1;
      case 'RND': return state + action.playload;
      default : return state;
    }
  
  }

  export default reducer;