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
    <li className={cx('item3', { current })} onClick={toggle}>
      <div className={cx('tab')}>{title}</div>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const ReactAccordion3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(accordionData[0].id)

  const onClickItem = (id: string) => () => {
    setCurrentId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div>
      <h3>React Accordion3</h3>
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

export default ReactAccordion3
