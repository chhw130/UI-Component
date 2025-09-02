import { useState } from 'react'
import cx from './cx'
import accordionData from './data'

type AccordionItemProps = {
  title: string
  description: string
  current: boolean
  toggle: () => void
}

const AccordionItem = ({
  title,
  description,
  current,
  toggle,
}: AccordionItemProps) => {
  return (
    <li className={cx('item', { current })} onClick={toggle}>
      <div className={cx('tab')}>{title}</div>
      {current ? <div className={cx('description')}>{description}</div> : null}
    </li>
  )
}

const ReactAccordion = () => {
  const [currentId, setCurrentId] = useState<string | null>(accordionData[0].id)

  const onClickItem = (id: string) => () => {
    setCurrentId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div>
      <h3>React Accordion</h3>
      <ul className={cx('container')}>
        {accordionData.map((item) => (
          <AccordionItem
            {...item}
            key={item.id}
            current={currentId === item.id}
            toggle={onClickItem(item.id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default ReactAccordion
