import { createContext } from "react"

export const defaultLanguageValue = { lang: 'english' }

const LanguageContext = createContext(defaultLanguageValue)

export default LanguageContext
