import {connect} from 'react-redux';
import LineItems from "../components/shopping-list/LineItems";

let mapStateToProps = state => {
  return {
    lineItems: state.lineItems.filter(lineItem => state.UIState.listToRender.includes(lineItem.id)),
  }
};

const mapDispatchToProps = dispatch => {
  return {
  }
}

const LineItemsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LineItems);

export default LineItemsContainer;