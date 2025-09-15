import data from '@/asset/data'
import cx from './cx'
import { useState } from 'react'

type TabItemsProps = {
  title: string
  description: string
  current: boolean
  toggle: () => void
}

const TabItems = ({ title, description, toggle, current }: TabItemsProps) => {
  return (
    <li className={cx('item', { current })}>
      <div className={cx('tab')} onClick={toggle}>
        {title}
      </div>
      <div className={cx('description')}>{description}</div>
    </li>
  )
}

const ReactTabMenu3 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)

  const onClickTab = (id: string) => () => {
    setCurrentId((prevId) => (prevId !== id ? id : null))
  }

  return (
    <>
      <h3>
        #2. React<sub>한 li안에 title/desc 모두 있게 처리</sub>
      </h3>
      <div className={cx('container', 'tabMenu3')}>
        <ul className={cx('tabList')}>
          {data.map((ele) => (
            <TabItems
              key={ele.id}
              {...ele}
              toggle={onClickTab(ele.id)}
              current={currentId === ele.id}
              description={ele.description}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default ReactTabMenu3
