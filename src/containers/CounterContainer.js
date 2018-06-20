import { connect } from 'react-redux';

import Counter from '../components/Counter';

const countItemsLeft = (items) => {
  return (items.filter((item) => item.completed === false)).length
}

const mapStateToProps = ({ listItems }) => ({
  itemsLeft: countItemsLeft(listItems)
})

export default connect(mapStateToProps, null)(Counter);