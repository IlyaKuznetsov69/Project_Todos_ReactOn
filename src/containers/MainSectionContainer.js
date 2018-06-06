import { connect } from 'react-redux';

import MainSection from '../components/MainSection';

const mapStateToProps = (state) => ({
  itemsQuantity: (state.listItems).length
})

export default connect(mapStateToProps, null)(MainSection);