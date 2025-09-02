import { useState } from 'react'
import cx from './cx'
import accordionData from './data'
import VanillaWrapper from '../vanillaWrapper'

type AccordionItemProps = {
  id: string
  title: string
  description: string
}

const AccordionItem = ({ id, title, description }: AccordionItemProps) => {
  const $list = document.createElement('li')
  $list.classList.add(cx('item'), cx('item3'))

  $list.setAttribute('data-id', id)

  const $tab = document.createElement('div')
  $tab.classList.add(cx('tab'))
  $tab.textContent = title

  const $description = document.createElement('div')
  $description.classList.add(cx('description'))
  $description.textContent = description

  $list.append($tab, $description)

  return $list
}

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = null

  const $ul = document.createElement('ul')

  $ul.classList.add(cx('container'))

  const $li = accordionData.map((data) => AccordionItem(data))

  const onClickTab = (event: Event) => {
    const $el = event.target as HTMLElement

    if (!$el.classList.contains(cx('tab'))) {
      return
    }

    const targetId = $el.parentElement?.dataset.id

    if (!targetId) {
      return
    }

    currentId = targetId === currentId ? null : targetId

    $li.forEach((item) => {
      item.classList.toggle(cx('current'), currentId === item.dataset.id)
    })
  }

  $ul.addEventListener('click', onClickTab)

  $ul.append(...$li)
  wrapper.append($ul)
}

const VanillaAccordion = () => (
  <VanillaWrapper initiator={initiator} title={'Accordion'} />
)

export default VanillaAccordion
