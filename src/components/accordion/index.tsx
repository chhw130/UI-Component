import cx from './cx'
import ReactAccordion from './ReactAccordion'
import ReactAccordion2 from './ReactAccordion2'
import ReactAccordion3 from './ReactAccordion3'
import VanillaAccordion from './VanillaAccordion'

const Accordion = () => {
  return (
    <div className={cx('Accordions')}>
      <h2>아코디언</h2>
      <ReactAccordion />
      <ReactAccordion2 />
      <ReactAccordion3 />
      <VanillaAccordion />
    </div>
  )
}

export default Accordion
