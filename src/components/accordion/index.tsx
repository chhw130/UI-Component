import cx from './cx'
import ReactAccordion from './ReactAccordion'
import ReactAccordion2 from './ReactAccordion2'

const Accordion = () => {
  return (
    <div className={cx('Accordions')}>
      <h2>아코디언</h2>
      <ReactAccordion />
      <ReactAccordion2 />
    </div>
  )
}

export default Accordion
