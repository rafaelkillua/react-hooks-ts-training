import { useCallback, useState } from 'react'

export default function useStatePartial<T>(initialValue: T): [T, (newData: Partial<T>) => void] {
  const [data, setData] = useState(initialValue)

  const setPartialData = useCallback(newData => {
    setData(prevData => ({
      ...prevData,
      ...newData
    }))
  }, [])

  return [data, setPartialData]
}
