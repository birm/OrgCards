// model into viewable state
function viewmodel(model){
  var cards = [];
  // translate model into cards
  // each role gets a card
  for (let role_id in model['Roles']){
    let role =  model['Roles'][role_id];
    // check each role for Assignments
    let assignments = model['Assignments'].filter( (x) => (x.Role === role.id)).map((x) => (x.Member));
    // resolve assignments to members
    let members = model['Members'].filter( (x) => (assignments.indexOf(x.id)) >=0);
    // pass out class list which contains role and member ids
    role['Members'] = members;
    cards.push(role);
  }
  console.log({cards: cards});
  view({cards: cards});
}
