/*
  The purpose of this middleware is to make sure there is a cart in all cases
  and that it is the same cart.
*/

module.exports = async function CartMiddleware(req, res, next){

  let cart;

  // Case 1
  if(!req.session.cart && req.user.cart){
    console.log('Case 1: no session cart but a user cart, add it to the session');
    req.session.cart = req.user.cart;
    req.session.save();
    console.log('we added the user cart to the session', req.session);

  // Case 2
  }else if(!req.session.cart && req.user.roles.includes('user')){
    console.log('Case 2: no session cart but a user, find if user has a cart');
    cart = await Cart.findOne({user: req.user._id});
    if(cart){
      console.log('case 2a: we found a cart for the user');
      req.session.cart = cart;
      req.session.save();
      console.log('we added the found user cart to the session', req.session);
    }else{
      console.log('case 2b: we did not find a user cart either, create a cart and add it to both the session and the user');
      cart = await new Cart();
      cart.save();
      req.user.cart = cart;
      req.user.save();
      console.log('we added the new cart to the user', req.user);
      req.session.cart = cart;
      req.session.save();
      console.log('we added the new user cart to the session', req.session);
    }

  // Case 3
  }else if(!req.session.cart){
    console.log('Case 3: no session cart, no user, create a session cart');
    cart = await new Cart();
    cart.save();
    req.session.cart = cart;
    req.session.save();
    console.log('we added the new cart to the session', req.session);

  // Case 4
  }else if(req.session.cart && req.user.cart){
    console.log('Case 4: a session cart, a user cart, are they the same?');
    if(req.session.cart.toString() !== req.user.cart.toString()){
      console.log('case 4a: they are not the same - for now we throw away the session cart (prob not popular)');
      req.session.cart = req.user.cart;
      req.session.save();
      console.log('we added the user cart to the session', req.session);
    }else{
      console.log('case 4b: they are the same, do nothing');
    }

  // Case 5
  }else if(req.session.cart && req.user.roles.includes('user')){
    console.log('Case 5: a session cart, a user, find if user has a saved cart');
    cart = await Cart.findOne({user: req.user._id});
    if(cart && cart._id == req.session.cart){
      console.log('case 5a: CAN THIS HAPPEN? The found user cart was the same as the session cart');
    }else if(cart){
      console.log('case 5b: SPECIAL: We found a cart for the user but it is not the same as the session cart - for now we throw away the session cart (prob not popular)');
      req.session.cart = cart;
      req.session.save();
      console.log('we added the found user cart to the session', req.session);
    }else{
      console.log('case 5c: we did not find a user cart, add the session cart to the user');
      req.user.cart = req.session.cart;
      req.user.save();
      console.log('we added the session cart to the user', req.user);
    }

  // Case 6
  }else{
    console.log('Case 6: a session cart, no user, do nothing');
  }

  next();
}