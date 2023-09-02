import Num2persian from 'num2persian'

const persianOrdinalNumbers = (val) => {
  if (val && !isNaN(val)) {
    const value = Math.floor(val)
    if (value > 0) {
      if (value === 1) {
        return 'اول'
      }
      if (Num2persian(value).endsWith('سی')) {
        return Num2persian(value) + '‌ام'
      }
      if (Num2persian(value).endsWith('سه')) {
        return Num2persian(value).replace('سه', 'سوم')
      }
      return Num2persian(value) + 'م'
    }
  }
  return val
}

export default persianOrdinalNumbers
