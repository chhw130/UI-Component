import cx from './cx'
import ReactAccordion from './ReactAccordion'
import ReactAccordion2 from './ReactAccordion2'
import ReactAccordion3 from './ReactAccordion3'
import HtmlAccordion from './HtmlAccordion'
import VanillaAccordion from './VanillaAccordion'
import HtmlAccordion2 from './HtmlAccordion2'

const Accordion = () => {
  return (
    <div className={cx('Accordions')}>
      <h2>아코디언</h2>
      <ReactAccordion />
      <ReactAccordion2 />
      <ReactAccordion3 />
      <VanillaAccordion />
      <HtmlAccordion />
      <HtmlAccordion2 />
    </div>
  )
}

export default Accordion
