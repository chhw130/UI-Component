import data from '@/asset/data'
import cx from './cx'
import { useState } from 'react'

type TabItemsProps = {
  title: string
  current: boolean
  toggle: () => void
}

const TabItems = ({ title, toggle, current }: TabItemsProps) => {
  return (
    <li className={cx('tab', { current })} onClick={toggle}>
      {title}
    </li>
  )
}

const ReactTabMenu = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)

  const onClickTab = (id: string) => () => {
    setCurrentId((prevId) => (prevId !== id ? id : null))
  }

  const currentData = data.find((ele) => ele.id === currentId)

  return (
    <>
      <h3>
        #1. React<sub>현재 선택된 description만 html로 그리기</sub>
      </h3>
      <div className={cx('container')}>
        <ul className={cx('tabList')}>
          {data.map((ele) => (
            <TabItems
              key={ele.id}
              {...ele}
              toggle={onClickTab(ele.id)}
              current={currentId === ele.id}
            />
          ))}
        </ul>
        <div className={cx('description')}>{currentData?.description}</div>
      </div>
    </>
  )
}

export default ReactTabMenu
