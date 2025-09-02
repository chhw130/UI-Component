import cx from './cx'
import accordionData from './data'

type AccordionItemProps = {
  id: string
  title: string
  description: string
  open: boolean
}

const AccordionItem = ({ title, description, open }: AccordionItemProps) => {
  return (
    <li>
      <details open={open} name={title}>
        <summary>{title}</summary>
        <div className={cx('description')}>{description}</div>
      </details>
    </li>
  )
}

const HtmlAccordion2 = () => {
  return (
    <div>
      <h3>HTML Accordion2</h3>
      <ul className={cx('container')}>
        {accordionData.map((item, idx) => (
          <AccordionItem {...item} key={item.id} open={idx === 0} />
        ))}
      </ul>
    </div>
  )
}

export default HtmlAccordion2
