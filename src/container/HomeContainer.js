import Home from "../components/Home"
import { connect } from 'react-redux';
import { AddToCart, RemoveToCart } from "../services/action/action"
// MapStateToProps basically use for when data is access via third component from Redux Store.
const  mapStateToProps = state =>({
data : state.cartItems
})
// mapDispatchTProps is use for when data is send component to Redux store. 
const mapDispatchToProps = dispatch =>({
    addToCartHandler : data=>dispatch(AddToCart(data)),
    removeToCartHandler : data=>dispatch(RemoveToCart(data))

})

 export default connect(mapStateToProps , mapDispatchToProps)(Home)
