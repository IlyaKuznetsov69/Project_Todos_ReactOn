import { connect } from 'react-redux';

import MainSection from '../components/MainSection';

const mapStateToProps = ({ listItems }) => ({
  itemsQuantity: (listItems).length
})

export default connect(mapStateToProps, null)(MainSection);