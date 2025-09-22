import data from '@/asset/data'
import cx from './cx'
import { useState } from 'react'

type TabItemsProps = {
  title: string
  current: boolean
  toggle: () => void
}

type BaseButtonProps = {
  children: React.ReactNode
  icon?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const BaseButton = ({ children, ...props }: BaseButtonProps) => {
  return <button {...props}>{children}</button>
}

const SubmitButton = () => {
  const onClickSubmitButton = () => {
    console.log('submit')
  }
  return (
    <BaseButton icon={<PenIcon />} onClick={onClickSubmitButton}>
      Submit
    </BaseButton>
  )
}

const TabItems = ({ title, toggle, current }: TabItemsProps) => {
  return (
    <li className={cx('tab', { current })} onClick={toggle}>
      {title}
    </li>
  )
}

const ReactTabMenu2 = () => {
  const [currentId, setCurrentId] = useState<string | null>(data[0].id)

  const onClickTab = (id: string) => () => {
    setCurrentId((prevId) => (prevId !== id ? id : null))
  }

  return (
    <>
      <h3>
        #2. React<sub>description은 다 렌더링하고 css로 hidden/show 처리</sub>
      </h3>
      <div className={cx('container', 'tabMenu2')}>
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
        {data.map((ele) => (
          <div
            key={ele.id}
            className={cx('description', { current: currentId === ele.id })}
          >
            {ele.description}
          </div>
        ))}
      </div>
    </>
  )
}

export default ReactTabMenu2
