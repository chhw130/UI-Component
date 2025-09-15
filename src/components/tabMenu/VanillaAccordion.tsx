import data from '@/asset/data'
import cx from './cx'
import VanillaWrapper from '../vanillaWrapper'

type TabItemsProps = {
  id: string
  title: string
  description: string
}

const buildTabMenu = ({ id }: TabItemsProps) => {
  const $li = document.createElement('li')
  $li.classList.add(cx('item'))
  $li.setAttribute('data-id', id)

  return $li
}

const buildDescription = ({ description }: TabItemsProps) => {
  const $div = document.createElement('div')
  $div.classList.add(cx('description'))
  $div.textContent = description
  return $div
}

const initiator = (wrapper: HTMLDivElement) => {
  const $container = document.createElement('div')
  $container.classList.add(cx('container'))

  const $ul = document.createElement('ul')
  $ul.classList.add(cx('tabList'))

  const $li = data.map(buildTabMenu)
  const $desc = data.map(buildDescription)

  $ul.append(...$li)
  $container.append($ul, ...$desc)

  wrapper.append($container)

  return $container
}

const VanillaAccordion = () => (
  <VanillaWrapper initiator={initiator} title={'TabMenu'} />
)

export default VanillaAccordion
