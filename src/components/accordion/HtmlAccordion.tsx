import { useState } from 'react'
import cx from './cx'
import accordionData from './data'

type AccordionItemProps = {
  id: string
  title: string
  description: string
  initialChecked: boolean
}

const AccordionItem = ({
  id,
  title,
  description,
  initialChecked,
}: AccordionItemProps) => {
  return (
    <li className={cx('item5')}>
      <input
        type="radio"
        name="accordion"
        id={id}
        className={cx('input')}
        defaultChecked={initialChecked}
      />
      <label htmlFor={id} className={cx('tab')}>
        {title}
      </label>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const HtmlAccordion = () => {
  return (
    <div>
      <h3>HTML Accordion</h3>
      <ul className={cx('container')}>
        {accordionData.map((item, idx) => (
          <AccordionItem {...item} key={item.id} initialChecked={idx === 0} />
        ))}
      </ul>
    </div>
  )
}

export default HtmlAccordion
