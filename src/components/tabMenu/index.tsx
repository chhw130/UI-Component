import cx from './cx'
import ReactTabMenu from './ReactTabMenu'
import ReactTabMenu2 from './ReactTabMemu2'
import ReactTabMenu3 from './ReactTabMemu3'
import VanillaAccordion from '../accordion/VanillaAccordion'

const TabMenus = () => {
  return (
    <div className={cx('TabMenus')}>
      <h2>탭메뉴</h2>
      <ReactTabMenu />
      <ReactTabMenu2 />
      <ReactTabMenu3 />
      <VanillaAccordion />
    </div>
  )
}

export default TabMenus
